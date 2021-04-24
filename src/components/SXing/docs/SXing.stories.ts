import { Story } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import { DEFAULT_WINDOW_FEATURES, TBaseSocialPropsOptions } from '@/mixins/BaseSocial/BaseSocial';
import SXing, { ISXingShareOptions } from '../SXing';
import SXingMDX from './SXing.mdx';

export default {
  title: 'Share/SXing',
  component: SXing,
  parameters: {
    docs: {
      page: SXingMDX,
    },
  },
};

const Template: Story<TBaseSocialPropsOptions<ISXingShareOptions>> = (args) => ({
  components: { SXing },

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
    <s-xing
      class="base-social"
      v-bind="args"
      @popup-close="onClose"
      @popup-open="onOpen"
      @popup-block="onBlock"
      @popup-focus="onFocus"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 455 455" aria-hidden="true" focusable="false">
        <path fill-rule="evenodd" d="M0 0v455h455V0H0zm78.75 289.756l54.653-89.993-40.981-72.205h69.366l41.002 72.205-54.657 89.993H78.75zM337.369 385h-73.605l-70.442-123.493L302.663 70h73.587L266.91 261.507 337.369 385z" clip-rule="evenodd"/>
      </svg>
    </s-xing>
`,
});

export const Default = Template.bind({});
Default.args = {
  windowFeatures: DEFAULT_WINDOW_FEATURES,
  shareOptions: {
    url: 'https://github.com/',
    followUrl: '',
  },
  useNativeBehavior: false,
};
