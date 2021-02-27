import { Story } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { DEFAULT_WINDOW_FEATURES, TBaseSocialPropsOptions } from '@/mixins/BaseSocial/BaseSocial';
import SFacebookMessenger, { ISFacebookMessengerShareOptions } from '../SFacebookMessenger';
import SFacebookMessengerMDX from './SFacebookMessenger.mdx';

export default {
  title: 'Share/SFacebookMessenger',
  component: SFacebookMessenger,
  parameters: {
    docs: {
      page: SFacebookMessengerMDX,
    },
  },
};

const Template: Story<TBaseSocialPropsOptions<ISFacebookMessengerShareOptions>> = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SFacebookMessenger },
  methods: {
    onClose: action('emit close'),
    onOpen: action('emit open'),
    onBlock: action('emit block'),
    onFocus: action('emit focus'),
  },
  template: `
    <s-facebook-messenger
      class="base-social"
      v-bind="$props"
      @popup-close="onClose"
      @popup-open="onOpen"
      @popup-block="onBlock"
      @popup-focus="onFocus"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
      </svg>
    </s-facebook-messenger>
`,
});

export const Default = Template.bind({});
Default.args = {
  windowFeatures: DEFAULT_WINDOW_FEATURES,
  shareOptions: {
    url: 'https://github.com/',
    redirectUri: 'https://www.domain.com/',
    appId: 123456789,
  },
  useNativeBehavior: false,
};
