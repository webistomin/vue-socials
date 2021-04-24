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
  const componentName = item[0];
  const component = item[1];

  if (componentName !== 'default') {
    const key = componentName as Exclude<keyof NamedExports, 'default'>;
    const val = component as Exclude<ExtendedPlugin, typeof plugin>;
    (plugin as ExtendedPlugin)[key] = val;
  }
});

export default plugin;
