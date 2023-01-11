import { Story } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import { TBaseSocialPropsOptions } from '@/mixins/BaseSocial/BaseSocial';
import SHouzz, { ISHouzzShareOptions } from '../SHouzz';
import SHouzzMDX from './SHouzz.mdx';

export default {
  title: 'Share/SHouzz',
  component: SHouzz,
  parameters: {
    docs: {
      page: SHouzzMDX,
    },
  },
};

const Template: Story<TBaseSocialPropsOptions<ISHouzzShareOptions>> = (args) => ({
  components: { SHouzz },

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
    <s-houzz
      class="base-social"
      v-bind="args"
      @popup-close="onClose"
      @popup-open="onOpen"
      @popup-block="onBlock"
      @popup-focus="onFocus"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M14.681 24h8.069V10.367L6.599 5.746V0H1.25v24h8.069v-7.556h5.362z"/>
      </svg>
    </s-houzz>
`,
});

export const Default = Template.bind({});
Default.args = {
  windowFeatures: {
    width: 1100,
    height: 700,
  },
  shareOptions: {
    url: 'https://github.com/',
    id: '123',
    image: 'url',
    title: 'Title',
    category: ['category'],
  },
  useNativeBehavior: false,
};
