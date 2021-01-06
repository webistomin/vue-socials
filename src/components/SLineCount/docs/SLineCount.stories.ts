import { Story } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import SLineCount from '../SLineCount';

export default {
  title: 'Count/SLineCount',
  component: SLineCount,
};

const Template: Story = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SLineCount },
  methods: {
    onLoad: action('emit load'),
  },
  template: `
    <s-line-count
      class="base-social"
      v-bind="$props"
      @load="onLoad"
    >
    </s-line-count>
  `,
});

export const Default = Template.bind({});
Default.args = {
  shareOptions: {
    url: 'https://github.com/',
  },
};
