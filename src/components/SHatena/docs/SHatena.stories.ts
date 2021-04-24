import { Story } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import { DEFAULT_WINDOW_FEATURES, TBaseSocialPropsOptions } from '@/mixins/BaseSocial/BaseSocial';
import SHatena, { ISHatenaShareOptions } from '../SHatena';
import SHatenaMDX from './SHatena.mdx';

export default {
  title: 'Share/SHatena',
  component: SHatena,
  parameters: {
    docs: {
      page: SHatenaMDX,
    },
  },
};

const Template: Story<TBaseSocialPropsOptions<ISHatenaShareOptions>> = (args) => ({
  components: { SHatena },

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
    <s-hatena
      class="base-social"
      v-bind="args"
      @popup-close="onClose"
      @popup-open="onOpen"
      @popup-block="onBlock"
      @popup-focus="onFocus"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1000 1000" aria-hidden="true" focusable="false">
        <path d="M41.1 95.5c120.8 1.8 231.6 1 352.3 9.9 55.3 4.1 108 17.3 151.9 53.2 101.9 83 76.4 249.6-45.3 297.8-8.4 3.3-16.8 6.4-25.2 11.2 34.1 6.4 65.9 17.3 94.5 36.2 99.4 73.4 91.5 242.5 22.4 315.4-37 39.2-84 57.9-135.3 68.3-47.1 9.4-95 11.2-142.7 11.7-94.5.8-178.3 4.3-272.8 5.4l.2-809.1zM11.2 522.1c0-7.2-.8-14.5-1.2-21.7.3-7.2 1.2-14.5 1.2-21.9M227.8 679c0 25-.2 37.2 0 62.2 0 5.8 1.8 14.5 11.7 14.3 42.5-.5 95 7.7 151.6-6.6 42.3-10.7 59.9-38 59.1-79.5-.8-47.9-19.9-72.1-64.9-81.5-47.9-10-93.7-9.1-142.1-10-9.4-.2-15.6 9.1-15.6 15.6.4 24.9.2 60.6.2 85.5zm0-318.9c0 23.2.2 39 0 62.2 0 7.1 5.1 15.6 15.6 15.6 38-.5 74.1 1 111.6-6.9 41.8-8.7 61.1-31.4 61.1-71.9 0-43-21.7-68.3-63.7-76.7-37.5-7.4-70.8-7.6-109-7.7-10 0-15.6 8.1-15.6 15.6.3 21.7 0 47.9 0 69.8zM788 500c.3-7.2 0-16.1 0-23.4V118.7c0-15.1.2-23.4 15.6-23.4h155.6c14.3-.3 15.6 2.5 15.6 15.6-.5 121.7 0 244 0 365.6 0 7.2-.3 16.1 0 23.4-.3 40.2-.3 76.5 0 116.7.2 11.5-3.1 15.8-15.6 15.6H803.6c-12.2.2-15.6-3.6-15.6-15.6.2-39.9 0-77.6 0-116.6zM772.7 795.5c.2-59.8 49.2-108.3 109-108 59.6.3 108.5 49.6 108.3 109-.2 59.4-49.7 108-109.5 107.5-60.6-.3-108-48.1-107.8-108.5z"/>
      </svg>
    </s-hatena>
`,
});

export const Default = Template.bind({});
Default.args = {
  windowFeatures: DEFAULT_WINDOW_FEATURES,
  shareOptions: {
    url: 'https://github.com/',
    title: 'Title',
  },
  useNativeBehavior: false,
};
