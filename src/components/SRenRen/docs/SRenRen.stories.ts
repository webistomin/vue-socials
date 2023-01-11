import { Story } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import { DEFAULT_WINDOW_FEATURES, TBaseSocialPropsOptions } from '@/mixins/BaseSocial/BaseSocial';
import SRenRen, { ISRenRenShareOptions } from '../SRenRen';
import SRenRenMDX from './SRenRen.mdx';

export default {
  title: 'Share/SRenRen',
  component: SRenRen,
  parameters: {
    docs: {
      page: SRenRenMDX,
    },
  },
};

const Template: Story<TBaseSocialPropsOptions<ISRenRenShareOptions>> = (args) => ({
  components: { SRenRen },

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
    <s-ren-ren
      class="base-social"
      v-bind="args"
      @popup-close="onClose"
      @popup-open="onOpen"
      @popup-block="onBlock"
      @popup-focus="onFocus"
    >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1000 1000" aria-hidden="true" focusable="false">
      <path d="M175 863.3c86.4 77.2 200.1 124.3 325 124.3s238.6-47.1 325-124.3c-140.7-84.9-254.1-210.4-324.8-360-70.7 149.7-184.5 275-325.2 360z"/>
      <path d="M500.2 503.3c-70.8 149.7-184.5 275-325.2 360 86.4 77.2 200.1 124.3 325 124.3s238.6-47.1 325-124.3c-140.6-84.9-254.1-210.4-324.8-360zM426 246.8c4.8-32.9 7.4-66.4 7.4-100.6 0-33.2-3.2-65.6-7.8-97.6-1.7-12.1-3-24.4-5.4-36.3C187.6 50.6 10 252.5 10 496.5c0 92.3 25.8 178.3 70 252 182.9-102.3 314.4-285.6 346-501.7z"/>
      <path d="M426 246.8c4.8-32.9 7.4-66.4 7.4-100.6 0-33.2-3.2-65.6-7.8-97.6-1.7-12.1-3-24.4-5.4-36.3C187.6 50.6 10 252.5 10 496.5c0 92.3 25.8 178.3 70 252 182.9-102.3 314.4-285.6 346-501.7zM579.8 12.3c-2.3 11.9-3.6 24.2-5.4 36.3-4.6 31.9-7.8 64.4-7.8 97.6 0 34.2 2.6 67.7 7.5 100.5 31.6 216 163.1 399.5 346 501.7 44.1-73.7 70-159.7 70-252C990 252.5 812.4 50.6 579.8 12.3z"/>
      <path d="M579.8 12.3c-2.3 11.9-3.6 24.2-5.4 36.3-4.6 31.9-7.8 64.4-7.8 97.6 0 34.2 2.6 67.7 7.5 100.5 31.6 216 163.1 399.5 346 501.7 44.1-73.7 70-159.7 70-252C990 252.5 812.4 50.6 579.8 12.3z"/>
    </svg>
    </s-ren-ren>
`,
});

export const Default = Template.bind({});
Default.args = {
  windowFeatures: DEFAULT_WINDOW_FEATURES,
  shareOptions: {
    srcUrl: 'https://github.com/',
    resourceUrl: 'https://github.com/',
    title: 'Title',
    description: 'Description',
    pic: '',
  },
  useNativeBehavior: false,
};
