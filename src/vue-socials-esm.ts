import _Vue, { PluginFunction } from 'vue';

/**
 * Import vue components
 */
import * as components from '@/components';

/**
 * Install function executed by Vue.use()
 */
const install: PluginFunction<never> = function installVueSocials(Vue: typeof _Vue) {
  Object.entries(components).forEach((item) => {
    Vue.component(item[0], item[1]);
  });
};

/**
 * Create module definition for Vue.use()
 */
export default install;

/**
 * To allow individual component use, export components
 * each can be registered via Vue.component()
 */
export * from '@/components';
