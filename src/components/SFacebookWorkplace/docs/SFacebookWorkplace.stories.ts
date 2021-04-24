import { Story } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import { TBaseSocialPropsOptions } from '@/mixins/BaseSocial/BaseSocial';
import SFacebookWorkplace, { ISFacebookWorkplaceShareOptions } from '../SFacebookWorkplace';
import SFacebookWorkplaceMDX from './SFacebookWorkplace.mdx';

export default {
  title: 'Share/SFacebookWorkplace',
  component: SFacebookWorkplace,
  parameters: {
    docs: {
      page: SFacebookWorkplaceMDX,
    },
  },
};

const Template: Story<TBaseSocialPropsOptions<ISFacebookWorkplaceShareOptions>> = (args) => ({
  components: { SFacebookWorkplace },

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
    <s-facebook-workplace
      class="base-social"
      v-bind="args"
      @popup-close="onClose"
      @popup-open="onOpen"
      @popup-block="onBlock"
      @popup-focus="onFocus"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
      </svg>
    </s-facebook-workplace>
`,
});

export const Default = Template.bind({});
Default.args = {
  windowFeatures: {},
  shareOptions: {
    url: 'https://github.com/',
  },
  useNativeBehavior: false,
};
