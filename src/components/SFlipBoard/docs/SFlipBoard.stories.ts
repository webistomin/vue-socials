import { Story } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import { TBaseSocialPropsOptions } from '@/mixins/BaseSocial/BaseSocial';
import SFlipBoard, { ISFlipBoardShareOptions } from '../SFlipBoard';
import SFlipBoardMDX from './SFlipBoard.mdx';

export default {
  title: 'Share/SFlipBoard',
  component: SFlipBoard,
  parameters: {
    docs: {
      page: SFlipBoardMDX,
    },
  },
};

const Template: Story<TBaseSocialPropsOptions<ISFlipBoardShareOptions>> = (args) => ({
  components: { SFlipBoard },

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
    <s-flip-board
      class="base-social"
      v-bind="args"
      @popup-close="onClose"
      @popup-open="onOpen"
      @popup-block="onBlock"
      @popup-focus="onFocus"
    >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="10 10 44 44" aria-hidden="true" focusable="false">
      <g fill="#000000">
        <path d="M24.667 54H10V10h14.814l-.147 44z"/>
        <path d="M39.48 10H24.668v14.667H54V10H39.48z" opacity=".85"/>
        <path d="M24.667 24.667h14.667v14.667H24.667V24.667z" opacity=".75"/>
      </g>
    </svg>
    </s-flip-board>
`,
});

export const Default = Template.bind({});
Default.args = {
  windowFeatures: {
    width: 834,
    height: 572,
  },
  shareOptions: {
    url: 'https://github.com/',
    title: 'Title',
  },
  useNativeBehavior: false,
};
