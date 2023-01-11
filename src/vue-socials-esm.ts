import { App, Plugin } from 'vue';

/**
 * Import vue components
 */
import * as components from '@/components';

/**
 * Install function executed by Vue.use()
 */
const install: Exclude<Plugin['install'], undefined> = function installVueSocials(app: App) {
  Object.entries(components).forEach((item) => {
    const componentName = item[0];
    const component = item[1];

    app.component(componentName, component);
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
