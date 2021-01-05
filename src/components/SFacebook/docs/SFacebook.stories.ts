import { Story } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import SFacebook from '../SFacebook';

export default {
  title: 'Share/SFacebook',
  component: SFacebook,
};

const Template: Story = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SFacebook },
  methods: {
    onClose: action('emit close'),
    onOpen: action('emit open'),
    onBlock: action('emit block'),
    onFocus: action('emit focus'),
  },
  template: `
    <s-facebook
      v-bind="$props"
      @popup-close="onClose"
      @popup-open="onOpen"
      @popup-block="onBlock"
      @popup-focus="onFocus"
    >
      Share
    </s-facebook>`,
});

export const Default = Template.bind({});
Default.args = {
  windowFeatures: {},
  shareOptions: {
    url: 'https://github.com/',
  },
};
