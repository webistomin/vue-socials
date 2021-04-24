import { Story } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import { DEFAULT_WINDOW_FEATURES, TBaseSocialPropsOptions } from '@/mixins/BaseSocial/BaseSocial';
import SKakaoStory, { ISKakaoStoryShareOptions } from '../SKakaoStory';
import SKakaoStoryMDX from './SKakaoStory.mdx';

export default {
  title: 'Share/SKakaoStory',
  component: SKakaoStory,
  parameters: {
    docs: {
      page: SKakaoStoryMDX,
    },
  },
};

const Template: Story<TBaseSocialPropsOptions<ISKakaoStoryShareOptions>> = (args) => ({
  components: { SKakaoStory },

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
    <s-kakao-story
      class="base-social"
      v-bind="args"
      @popup-close="onClose"
      @popup-open="onOpen"
      @popup-block="onBlock"
      @popup-focus="onFocus"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 0C5.333 0 1.314 4.11.291 8.183c-1.062 4.224.793 8.271 4.855 10.689-.903 3.276-1.45 4.376-.587 4.965.968.662 2.362-.707 4.691-2.494l.957-.733c3.749.486 7.568-.593 10.272-2.913 2.27-1.948 3.52-4.553 3.52-7.334C24 4.648 18.617 0 12 0zm7.504 16.558c-2.454 2.106-5.965 3.049-9.388 2.524-.479-.077-2.592 1.773-4.312 2.971.194-.735.574-1.972.943-3.353.09-.336-.063-.69-.37-.854-4.527-2.431-5.362-6.396-4.633-9.297C2.628 5.041 6.141 1.5 12 1.5c5.79 0 10.5 3.976 10.5 8.862 0 2.338-1.064 4.538-2.996 6.196z"/>
        <path d="M6.5 7.75h-3c-.992 0-.993 1.5 0 1.5h.75v4.25c0 .992 1.5.993 1.5 0V9.25h.75c.992 0 .993-1.5 0-1.5zM10.196 8.222c-.001-.003-.004-.004-.005-.007-.246-.595-1.126-.623-1.383 0-.001.002-.003.004-.004.007l-2 5c-.154.384.033.821.418.975.958.386 1.129-.971 1.386-1.446h1.785l.411 1.028c.367.92 1.764.367 1.393-.557zm-.988 3.028l.292-.731.292.731zM15.5 12.75h-1.25V8.5c0-.992-1.5-.993-1.5 0v5c0 .414.336.75.75.75h2c.992 0 .993-1.5 0-1.5zM18.25 9.689V8.5c0-.992-1.5-.993-1.5 0v5c0 .992 1.5.993 1.5 0v-1.469c1.605 1.746 1.657 2.219 2.25 2.219.63 0 .991-.747.569-1.239l-1.857-2.163 1.823-1.823c.002-.003.005-.005.007-.008l.003-.003c.681-.706-.373-1.747-1.07-1.05z"/>
      </svg>
    </s-kakao-story>
`,
});

export const Default = Template.bind({});
Default.args = {
  windowFeatures: DEFAULT_WINDOW_FEATURES,
  shareOptions: {
    url: 'https://github.com/',
    text: 'Text',
  },
  useNativeBehavior: false,
};
