import { Story } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import SRedditCount from '../SRedditCount';

export default {
  title: 'Count/SRedditCount',
  component: SRedditCount,
};

const Template: Story = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SRedditCount },
  methods: {
    onLoad: action('emit load'),
  },
  template: `
    <s-reddit-count
      class="base-social"
      v-bind="$props"
      @load="onLoad"
    >
    </s-reddit-count>
  `,
});

export const Default = Template.bind({});
Default.args = {
  shareOptions: {
    url: 'https://github.com/',
  },
};
