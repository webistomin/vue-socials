import { Story } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import STumblrCount from '../STumblrCount';

export default {
  title: 'Count/STumblrCount',
  component: STumblrCount,
};

const Template: Story = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { STumblrCount },
  methods: {
    onLoad: action('emit load'),
  },
  template: `
    <s-tumblr-count
      class="base-social"
      v-bind="$props"
      @load="onLoad"
    >
    </s-tumblr-count>
  `,
});

export const Default = Template.bind({});
Default.args = {
  shareOptions: {
    url: 'https://github.com/',
  },
};
