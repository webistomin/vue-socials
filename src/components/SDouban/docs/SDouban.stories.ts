import { Story } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import { TBaseSocialPropsOptions } from '@/mixins/BaseSocial/BaseSocial';
import SDouban, { ISDoubanShareOptions } from '../SDouban';
import SDoubanMDX from './SDouban.mdx';

export default {
  title: 'Share/SDouban',
  component: SDouban,
  parameters: {
    docs: {
      page: SDoubanMDX,
    },
  },
};

const Template: Story<TBaseSocialPropsOptions<ISDoubanShareOptions>> = (args) => ({
  components: { SDouban },

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
    <s-douban
      class="base-social"
      v-bind="args"
      @popup-close="onClose"
      @popup-open="onOpen"
      @popup-block="onBlock"
      @popup-focus="onFocus"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1000 1000" aria-hidden="true" focusable="false">
        <path d="M363.9 418.3h272.2v108.9H363.9V418.3z"/>
        <path d="M500 10C229.4 10 10 229.4 10 500s219.4 490 490 490 490-219.4 490-490S770.6 10 500 10zM282.2 255h435.5v54.5H282.2V255zm408.3 108.9v217.8h-381V363.9h381zM745 745H255v-54.5h133.2c-13.1-27.2-30.2-56.6-51.3-88.3l51.2-20c20.4 30.1 38.5 53.9 54.6 108.4h97c19.2-27.2 36.1-68.9 50.5-108.7l55.7 20.6c-14.6 33.6-30.3 60.8-47 88.1h145.9V745z"/>
      </svg>
    </s-douban>
`,
});

export const Default = Template.bind({});
Default.args = {
  windowFeatures: {
    width: 1100,
    height: 450,
  },
  shareOptions: {
    url: 'https://github.com/',
    title: 'Title',
  },
  useNativeBehavior: false,
};
