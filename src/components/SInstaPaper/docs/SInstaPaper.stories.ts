import { Story } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import { TBaseSocialPropsOptions } from '@/mixins/BaseSocial/BaseSocial';
import SInstaPaper, { ISInstaPaperShareOptions } from '../SInstaPaper';
import SInstaPaperMDX from './SInstaPaper.mdx';

export default {
  title: 'Share/SInstaPaper',
  component: SInstaPaper,
  parameters: {
    docs: {
      page: SInstaPaperMDX,
    },
  },
};

const Template: Story<TBaseSocialPropsOptions<ISInstaPaperShareOptions>> = (args) => ({
  components: { SInstaPaper },

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
    <s-insta-paper
      class="base-social"
      v-bind="$props"
      @popup-close="onClose"
      @popup-open="onOpen"
      @popup-block="onBlock"
      @popup-focus="onFocus"
    >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1000 1000" aria-hidden="true" focusable="false">
      <path d="M717.8 962.5c-59.9-4.3-98.7-13.3-116.4-27-17.7-13.6-26.6-49-26.6-106.1V170.6c0-54.5 8.9-89.6 26.6-105.2 17.7-15.7 56.5-25 116.4-27.9V10H282.2v27.5c59.9 2.9 98.7 12.2 116.5 27.9 17.7 15.7 26.6 50.7 26.6 105.2v658.9c0 57-8.9 92.4-26.6 106.1-17.8 13.7-56.6 22.6-116.5 27V990h435.6v-27.5z"/>
    </svg>
    </s-insta-paper>
`,
});

export const Default = Template.bind({});
Default.args = {
  windowFeatures: {
    width: 600,
    height: 600,
  },
  shareOptions: {
    url: 'https://github.com/',
  },
  useNativeBehavior: false,
};
