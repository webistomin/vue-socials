import { Story } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import { DEFAULT_WINDOW_FEATURES, TBaseSocialPropsOptions } from '@/mixins/BaseSocial/BaseSocial';
import SPocket, { ISPocketShareOptions } from '../SPocket';
import SPocketMDX from './SPocket.mdx';

export default {
  title: 'Share/SPocket',
  component: SPocket,
  parameters: {
    docs: {
      page: SPocketMDX,
    },
  },
};

const Template: Story<TBaseSocialPropsOptions<ISPocketShareOptions>> = (args) => ({
  components: { SPocket },

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
    <s-pocket
      class="base-social"
      v-bind="args"
      @popup-close="onClose"
      @popup-open="onOpen"
      @popup-block="onBlock"
      @popup-focus="onFocus"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
        <path d="M64 21.3c-35.1 0-64 28.9-64 64v149.3c0 141.2 114.8 256 256 256s256-114.8 256-256V85.3c0-35.1-28.9-64-64-64H64zM64 64h384c12.1 0 21.3 9.3 21.3 21.3v149.3C469.3 352.8 374.1 448 256 448S42.7 352.8 42.7 234.7V85.3c0-12 9.2-21.3 21.3-21.3zm78 94c-8.2 0-16.4 3.8-22.7 10-12.5 12.5-12.5 32.2 0 44.7L234.7 328c6 6 14.2 9.3 22.7 9.3s16.7-3.3 22.7-9.3l112.7-112c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-90 90-92.8-92.7c-6.3-6.2-14.5-10-22.7-10z"/>
      </svg>
    </s-pocket>
`,
});

export const Default = Template.bind({});
Default.args = {
  windowFeatures: DEFAULT_WINDOW_FEATURES,
  shareOptions: {
    url: 'https://github.com/',
  },
  useNativeBehavior: false,
};
