/**
 * iife/cjs usage extends esm default export – so import it all
 */
import plugin, * as components from '@/vue-socials-esm';

/**
 * Attach named exports directly to plugin. IIFE/CJS will
 * only expose one global var, with component exports exposed as properties of
 * that global var (eg. plugin.component)
 */
type NamedExports = Exclude<typeof components, 'default'>;
type ExtendedPlugin = typeof plugin & NamedExports;

Object.entries(components).forEach((item) => {
  if (item[0] !== 'default') {
    const key = item[0] as Exclude<keyof NamedExports, 'default'>;
    const val = item[1] as Exclude<ExtendedPlugin, typeof plugin>;
    (plugin as ExtendedPlugin)[key] = val;
  }
});

export default plugin;
