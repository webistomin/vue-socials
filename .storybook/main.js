// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const SRC_PATH = path.resolve(__dirname, '../src');

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|ts)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  webpackFinal: async (config) => {
    config.resolve.extensions.push('.ts');
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias['@'] = SRC_PATH;

    return config;
  },
};
