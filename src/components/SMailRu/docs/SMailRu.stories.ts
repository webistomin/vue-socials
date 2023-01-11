import { Story } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import { DEFAULT_WINDOW_FEATURES, TBaseSocialPropsOptions } from '@/mixins/BaseSocial/BaseSocial';
import SMailRu, { ISMailRuShareOptions } from '../SMailRu';
import SMailRuMDX from './SMailRu.mdx';

export default {
  title: 'Share/SMailRu',
  component: SMailRu,
  parameters: {
    docs: {
      page: SMailRuMDX,
    },
  },
};

const Template: Story<TBaseSocialPropsOptions<ISMailRuShareOptions>> = (args) => ({
  components: { SMailRu },

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
    <s-mail-ru
      class="base-social"
      v-bind="args"
      @popup-close="onClose"
      @popup-open="onOpen"
      @popup-block="onBlock"
      @popup-focus="onFocus"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1000 1000" aria-hidden="true" focusable="false">
        <path d="M868.4 182.5c-160.6-167.7-426.9-201-628.9-80.8C-24.6 258.8-29.9 562.1 69.7 734.5 217 989.7 532.5 994.6 645.8 946.3c75-31.9 41.7-129.5-30.6-100.4-142.6 57.6-382.6-.1-466.5-193.7-77-177.5 2.3-366.4 126-451.8 116.4-80.3 335.4-103.8 498.5 39C948.4 392.7 874.1 657 812 720.9c-15.9 16.3-44.6 3.2-42.1-22.2l-.2-386.9c0-10.9-7.5-45.3-43.8-45.3H720c-23.3 0-40 18.8-40 43.6v-.1c-51.7-51.8-122.1-84.9-197-84.9-148 0-278.2 131.7-278.2 281.2 0 148 130.2 278.2 278.2 278.2 74.9 0 143.6-29.9 195.3-81.2l.8 27.6c-.7 84.5 109.5 140.9 183.7 82.9 163.7-127.6 173.5-456 5.6-631.3zM482 693.2c-98.6 0-173.8-70.8-173.8-182.9 0-100.1 62.2-188.3 174.2-188.3h3.7c97.1 0 177.5 65.2 183.1 173.5l.2 21.9C664.3 612.7 592 693.2 482 693.2z"/>
      </svg>
    </s-mail-ru>
`,
});

export const Default = Template.bind({});
Default.args = {
  windowFeatures: DEFAULT_WINDOW_FEATURES,
  shareOptions: {
    url: 'https://github.com/',
    title: 'Title',
    description: 'Description',
    image: '',
    swfUrl: '',
  },
  useNativeBehavior: false,
};
