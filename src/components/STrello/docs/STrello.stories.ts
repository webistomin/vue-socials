import { Story } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import { DEFAULT_WINDOW_FEATURES, TBaseSocialPropsOptions } from '@/mixins/BaseSocial/BaseSocial';
import STrello, { ISTrelloShareOptions } from '../STrello';
import STrelloMDX from './STrello.mdx';

export default {
  title: 'Share/STrello',
  component: STrello,
  parameters: {
    docs: {
      page: STrelloMDX,
    },
  },
};

const Template: Story<TBaseSocialPropsOptions<ISTrelloShareOptions>> = (args) => ({
  components: { STrello },

  setup() {
    const onClose = action('emit close');
    const onOpen = action('emit open');
    const onBlock = action('emit block');
    const onFocus = action('emit focus');

    return {
      args,
      onClose,
      onOpen,
      onBlock,
      onFocus,
    };
  },

  template: `
    <s-trello
      class="base-social"
      v-bind="args"
      @popup-close="onClose"
      @popup-open="onOpen"
      @popup-block="onBlock"
      @popup-focus="onFocus"
    >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M28 0H4C1.792 0 0 1.792 0 4v24c0 2.208 1.792 4 4 4h24c2.208 0 4-1.792 4-4V4c0-2.208-1.792-4-4-4zM13.922 24.24c0 1.063-.859 1.922-1.922 1.922H6.078c-1.057 0-1.917-.865-1.917-1.922V6.079c0-1.057.859-1.917 1.917-1.917H12c1.063 0 1.922.859 1.922 1.917zm13.917-8c0 1.057-.859 1.922-1.917 1.922H20c-1.063 0-1.922-.865-1.922-1.922V6.079c0-1.057.865-1.917 1.922-1.917h5.922c1.057 0 1.917.859 1.917 1.917z"/>
    </svg>
    </s-trello>
`,
});

export const Default = Template.bind({});
Default.args = {
  windowFeatures: DEFAULT_WINDOW_FEATURES,
  shareOptions: {
    url: 'https://github.com/',
    name: 'Name',
    description: 'Description',
  },
  useNativeBehavior: false,
};
