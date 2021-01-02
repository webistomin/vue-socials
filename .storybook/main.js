const path = require('path');
const SRC_PATH = path.resolve(__dirname, '../src');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|ts)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config) => {
    config.resolve.extensions.push('.ts');
    config.resolve.alias['@'] = SRC_PATH;

    return config;
  },
}
