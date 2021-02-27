import fs from 'fs';
import path from 'path';
import vue from 'rollup-plugin-vue';
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
import minimist from 'minimist';
import findIndex from 'lodash.findindex';

const ES_BROWSERSLIST = fs.readFileSync('./.browserslistrc')
  .toString()
  .split('\n');

const argv = minimist(process.argv.slice(2));

const projectRoot = path.resolve(__dirname, '..');

const BASE_CONFIG = {
  input: 'src/vue-socials.ts',
  plugins: {
    resolve: {
      extensions: ['.js', '.ts', '.vue'],
    },
    preVue: [
      alias({
        entries: [
          {
            find: '@',
            replacement: `${path.resolve(projectRoot, 'src')}`,
          },
        ],
        customResolver: resolve({
          extensions: ['.js', '.ts', '.vue'],
        }),
      }),
    ],
    replace: {
      values: {
        'process.env.NODE_ENV': JSON.stringify('production'),
      },
      preventAssignment: true,
    },
    vue: {
      normalizer: '~vue-runtime-helpers/dist/normalize-component.js',
      styleInjector: '~vue-runtime-helpers/dist/inject-style/browser.js',
      styleInjectorSSR: '~vue-runtime-helpers/dist/inject-style/server.js',
      css: true,
      template: {
        isProduction: true,
        compilerOptions: {
          modules: [
            {
              preTransformNode(astEl) {
                if (process.env.NODE_ENV === 'production') {
                  const { attrsMap, attrsList } = astEl;
                  if (attrsMap['data-test']) {
                    delete attrsMap['data-test'];
                    const index = findIndex(attrsList, (x) => x.name === 'data-test');
                    attrsList.splice(index, 1);
                  }
                }
                return astEl;
              },
            },
          ],
        },
      },
    },
    postVue: [
    ],
    babel: {
      exclude: 'node_modules/**',
      extensions: ['.js', '.ts', '.vue'],
      babelHelpers: 'bundled',
      presets: [
        [
          '@babel/preset-env',
          {
            targets: ES_BROWSERSLIST,
          },
        ],
      ],
    },
  },
};

const external = [
  'vue',
];

const globals = {
  vue: 'Vue',
};

const BUILD_FORMATS = [];

/**
 * ESM
 */
if (!argv.format || argv.format === 'esm') {
  const ESM_CONFIG = {
    ...BASE_CONFIG,
    input: 'src/vue-socials-esm.ts',
    external,
    output: {
      dir: 'dist/esm',
      format: 'esm',
      exports: 'named',
      sourcemap: true,
      preserveModules: true,
    },
    plugins: [
      resolve(BASE_CONFIG.plugins.resolve),
      replace(BASE_CONFIG.plugins.replace),
      ...BASE_CONFIG.plugins.preVue,
      vue(BASE_CONFIG.plugins.vue),
      ...BASE_CONFIG.plugins.postVue,
      babel(BASE_CONFIG.plugins.babel),
      commonjs(),
      copy({
        targets: [
          { src: 'src/vue-socials.d.ts', dest: 'dist/types' },
        ],
      }),
    ],
  };

  BUILD_FORMATS.push(ESM_CONFIG);
}

/**
 * ES
 */
if (!argv.format || argv.format === 'es') {
  const ES_CONFIG = {
    ...BASE_CONFIG,
    input: 'src/vue-socials-esm.ts',
    external,
    output: {
      file: 'dist/vue-socials.es.js',
      format: 'esm',
      exports: 'named',
      sourcemap: true,
    },
    plugins: [
      resolve(BASE_CONFIG.plugins.resolve),
      replace(BASE_CONFIG.plugins.replace),
      ...BASE_CONFIG.plugins.preVue,
      vue(BASE_CONFIG.plugins.vue),
      ...BASE_CONFIG.plugins.postVue,
      babel(BASE_CONFIG.plugins.babel),
      commonjs(),
    ],
  };

  BUILD_FORMATS.push(ES_CONFIG);
}

/**
 * CJS
 */
if (!argv.format || argv.format === 'cjs') {
  const CJS_CONFIG = {
    ...BASE_CONFIG,
    external,
    output: {
      compact: true,
      file: 'dist/vue-socials.cjs.js',
      format: 'cjs',
      name: 'VueSocials',
      exports: 'auto',
      globals,
    },
    plugins: [
      resolve(BASE_CONFIG.plugins.resolve),
      replace(BASE_CONFIG.plugins.replace),
      ...BASE_CONFIG.plugins.preVue,
      vue({
        ...BASE_CONFIG.plugins.vue,
        template: {
          ...BASE_CONFIG.plugins.vue.template,
          optimizeSSR: true,
        },
      }),
      ...BASE_CONFIG.plugins.postVue,
      babel(BASE_CONFIG.plugins.babel),
      commonjs(),
    ],
  };

  BUILD_FORMATS.push(CJS_CONFIG);
}

/**
 * IIFE
 */
if (!argv.format || argv.format === 'iife') {
  const IIFE_CONFIG = {
    ...BASE_CONFIG,
    external,
    output: {
      compact: true,
      file: 'dist/vue-socials.iife.js',
      format: 'iife',
      name: 'VueSocials',
      exports: 'auto',
      globals,
    },
    plugins: [
      resolve(BASE_CONFIG.plugins.resolve),
      replace(BASE_CONFIG.plugins.replace),
      ...BASE_CONFIG.plugins.preVue,
      vue(BASE_CONFIG.plugins.vue),
      ...BASE_CONFIG.plugins.postVue,
      babel(BASE_CONFIG.plugins.babel),
      commonjs(),
      terser({
        output: {
          ecma: 5,
        },
      }),
    ],
  };
  BUILD_FORMATS.push(IIFE_CONFIG);
}

export default BUILD_FORMATS;
