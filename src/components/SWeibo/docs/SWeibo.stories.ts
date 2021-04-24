import { Story } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import { DEFAULT_WINDOW_FEATURES, TBaseSocialPropsOptions } from '@/mixins/BaseSocial/BaseSocial';
import SWeibo, { ISWeiboShareOptions } from '../SWeibo';
import SWeiboMDX from './SWeibo.mdx';

export default {
  title: 'Share/SWeibo',
  component: SWeibo,
  parameters: {
    docs: {
      page: SWeiboMDX,
    },
  },
};

const Template: Story<TBaseSocialPropsOptions<ISWeiboShareOptions>> = (args) => ({
  components: { SWeibo },

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
    <s-weibo
      class="base-social"
      v-bind="args"
      @popup-close="onClose"
      @popup-open="onOpen"
      @popup-block="onBlock"
      @popup-focus="onFocus"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1000 1000" aria-hidden="true" focusable="false">
        <path d="M746.2 485.3c-13.8-4.1-23.2-6.9-16-25 15.6-39.2 17.3-73.1.3-97.3-31.8-45.3-118.9-43-218.6-1.2 0 0-31.3 13.7-23.4-11.2 15.3-49.2 13-90.4-10.9-114.3-54.2-54-198 2-321.5 125.1C63.7 453.9 10 551.5 10 635.9c0 161.7 207.8 259.9 411.1 259.9 266.5 0 443.8-154.4 443.8-277.1 0-74-62.5-115.9-118.7-133.4zM421.7 837.9c-162.2 16-302.3-57.1-312.8-163.5-10.5-106.1 112.5-205.2 274.8-221.2S686 510.3 696.5 616.5C706.9 722.9 583.9 822 421.7 837.9zM923.2 189.5c-64.4-71.1-159.4-98.3-246.9-79.7-20.2 4.3-33.3 24.2-28.8 44.4 4.3 20.2 24.2 33.1 44.6 28.8 62.4-13.2 129.7 6.1 175.5 56.6 45.8 50.5 58.1 119.5 38.5 179.9-6.4 19.8 4.4 40.8 24.2 47.1 19.8 6.4 40.8-4.4 47.2-24v-.2c27.3-84.8 10.1-181.8-54.3-252.9z"/>
        <path d="M824.2 278.5c-31.3-34.7-77.5-47.9-120.3-38.9-17.5 3.8-28.6 20.9-24.9 38.2 3.8 17.3 20.9 28.5 38.4 24.7 20.9-4.4 43.5 2 58.8 18.9 15.3 17 19.4 40 12.8 60.3-5.4 17 3.8 35.1 20.7 40.5 17 5.4 35.2-3.8 40.7-20.7 13.7-41.1 5.3-88.4-26.2-123zM437.9 535c-77.2-20.1-164.5 18.3-198 86.3-34.1 69.1-1.2 146 76.9 171 80.8 26 176-13.8 209.1-88.6 32.6-72.9-8.2-148.1-88-168.7zm-59 176.8c-15.6 25-49.2 35.9-74.6 24.4-25-11.4-32.3-40.3-16.6-64.7 15.5-24.2 47.9-35.1 73.1-24.5 25.4 10.7 33.6 39.5 18.1 64.8zm51.7-66.1c-5.6 9.7-18.3 14.3-28 10.4-9.7-4-12.7-14.8-7.2-24.4 5.6-9.4 17.8-14.2 27.3-10.2 9.9 3.4 13.4 14.3 7.9 24.2z"/>
      </svg>
    </s-weibo>
`,
});

export const Default = Template.bind({});
Default.args = {
  windowFeatures: DEFAULT_WINDOW_FEATURES,
  shareOptions: {
    url: 'https://github.com/',
    title: 'Title',
    appkey: '',
  },
  useNativeBehavior: false,
};
