import { Story } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import { DEFAULT_WINDOW_FEATURES, TBaseSocialPropsOptions } from '@/mixins/BaseSocial/BaseSocial';
import SHackerNews, { ISHackerNewsShareOptions } from '../SHackerNews';
import SHackerNewsMDX from './SHackerNews.mdx';

export default {
  title: 'Share/SHackerNews',
  component: SHackerNews,
  parameters: {
    docs: {
      page: SHackerNewsMDX,
    },
  },
};

const Template: Story<TBaseSocialPropsOptions<ISHackerNewsShareOptions>> = (args) => ({
  components: { SHackerNews },

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
    <s-hacker-news
      class="base-social"
      v-bind="args"
      @popup-close="onClose"
      @popup-open="onOpen"
      @popup-block="onBlock"
      @popup-focus="onFocus"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
        <path d="M0 32v448h448V32H0zm21.2 197.2H21c.1-.1.2-.3.3-.4 0 .1 0 .3-.1.4zm218 53.9V384h-31.4V281.3L128 128h37.3c52.5 98.3 49.2 101.2 59.3 125.6 12.3-27 5.8-24.4 60.6-125.6H320l-80.8 155.1z"/>
      </svg>
    </s-hacker-news>
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
