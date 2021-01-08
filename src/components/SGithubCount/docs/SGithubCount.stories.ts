import { Story } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import SGithubCount from '../SGithubCount';

export default {
  title: 'Count/SGithubCount',
  component: SGithubCount,
};

const Template: Story = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SGithubCount },
  methods: {
    onLoad: action('emit load'),
  },
  template: `
    <s-github-count
      class="base-social"
      v-bind="$props"
      @load="onLoad"
    >
    </s-github-count>
  `,
});

export const Default = Template.bind({});
Default.args = {
  shareOptions: {
    url: 'https://github.com/',
    username: 'webistomin',
  },
};
