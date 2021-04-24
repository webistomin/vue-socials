import { Story } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import { DEFAULT_WINDOW_FEATURES, TBaseSocialPropsOptions } from '@/mixins/BaseSocial/BaseSocial';
import SLinkedIn, { ISLinkedInShareOptions } from '../SLinkedIn';
import SLinkedInMDX from './SLinkedIn.mdx';

export default {
  title: 'Share/SLinkedIn',
  component: SLinkedIn,
  parameters: {
    docs: {
      page: SLinkedInMDX,
    },
  },
};

const Template: Story<TBaseSocialPropsOptions<ISLinkedInShareOptions>> = (args) => ({
  components: { SLinkedIn },

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
    <s-linked-in
      class="base-social"
      v-bind="$props"
      @popup-close="onClose"
      @popup-open="onOpen"
      @popup-block="onBlock"
      @popup-focus="onFocus"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    </s-linked-in>
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
