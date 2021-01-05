import { Story } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import SVkontakte from '../SVkontakte';

export default {
  title: 'Share/SVkontakte',
  component: SVkontakte,
};

const Template: Story = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SVkontakte },
  methods: {
    onClose: action('emit close'),
    onOpen: action('emit open'),
    onBlock: action('emit block'),
    onFocus: action('emit focus'),
    onClick: action('emit click'),
  },
  template: `
    <s-vkontakte
      v-bind="$props"
      @popup-close="onClose"
      @popup-open="onOpen"
      @popup-block="onBlock"
      @popup-focus="onFocus"
    >
      Share
    </s-vkontakte>`,
});

export const Default = Template.bind({});
Default.args = {
  // windowFeatures: {},
  shareOptions: {
    url: 'https://github.com/',
  },
};
