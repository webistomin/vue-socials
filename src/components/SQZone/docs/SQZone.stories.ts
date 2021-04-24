import { Story } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import { DEFAULT_WINDOW_FEATURES, TBaseSocialPropsOptions } from '@/mixins/BaseSocial/BaseSocial';
import SQZone, { ISQZoneShareOptions } from '../SQZone';
import SQZoneMDX from './SQZone.mdx';

export default {
  title: 'Share/SQZone',
  component: SQZone,
  parameters: {
    docs: {
      page: SQZoneMDX,
    },
  },
};

const Template: Story<TBaseSocialPropsOptions<ISQZoneShareOptions>> = (args) => ({
  components: { SQZone },

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
    <s-q-zone
      class="base-social"
      v-bind="args"
      @popup-close="onClose"
      @popup-open="onOpen"
      @popup-block="onBlock"
      @popup-focus="onFocus"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1000 1000" aria-hidden="true" focusable="false">
        <path d="M788.9 972.9c-5.7 0-11.5-1.5-16.7-4.4L502.1 814.6 236 968.4c-11.5 6.6-25.8 5.9-36.6-1.8-10.8-7.8-16-21.1-13.3-34.2l63.7-310.8L22.4 435.3c-10.3-8.4-14.7-22.2-11.2-35s14.3-22.4 27.4-24.5l318.2-48.9L468.7 48.3c5-12.4 16.8-20.7 30.2-21.2 13.4-.5 25.7 7 31.5 19l137.3 283.8 292.4 33.8c13.2 1.5 24.3 10.7 28.3 23.4s.1 26.6-9.9 35.4L754.4 620.6 821.9 932c2.8 13-2.3 26.5-13 34.4-5.9 4.3-13 6.5-20 6.5zM502 742c5.8 0 11.5 1.5 16.7 4.4l221.2 126-55.7-256.8c-2.6-11.9 1.5-24.4 10.6-32.4l182.3-161L641.5 395c-11.5-1.3-21.5-8.4-26.5-18.8L502.9 144.3l-90.6 225.6c-4.4 11.1-14.4 19-26.2 20.8L123.7 431l184.6 151.3c9.7 7.9 14.2 20.6 11.7 32.9l-52.7 257.2 217.9-125.9c5.1-3 11-4.5 16.8-4.5z"/>
        <path d="M621.5 708.6h-243c-14.1 0-26.7-8.7-31.6-21.9-4.9-13.2-1.2-28.1 9.5-37.3l175-152.1H378.5c-18.6 0-33.8-15.1-33.8-33.8 0-18.6 15.1-33.8 33.8-33.8h243.1c14.1 0 26.7 8.7 31.6 21.9 4.9 13.2 1.2 28.1-9.5 37.3L468.7 641h152.8c18.6 0 33.8 15.1 33.8 33.8 0 18.7-15.1 33.8-33.8 33.8z"/>
      </svg>
    </s-q-zone>
`,
});

export const Default = Template.bind({});
Default.args = {
  windowFeatures: DEFAULT_WINDOW_FEATURES,
  shareOptions: {
    url: 'https://github.com/',
    title: 'Title',
    summary: 'Summary',
  },
  useNativeBehavior: false,
};
