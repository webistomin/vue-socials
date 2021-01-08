import { Story } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import SGithubRepoCount from '../SGithubRepoCount';

export default {
  title: 'Count/SGithubRepoCount',
  component: SGithubRepoCount,
};

const Template: Story = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SGithubRepoCount },
  methods: {
    onLoad: action('emit load'),
  },
  template: `
    <s-github-repo-count
      class="base-social"
      v-bind="$props"
      @load="onLoad"
    >
    </s-github-repo-count>
  `,
});

export const Default = Template.bind({});
Default.args = {
  shareOptions: {
    username: 'webistomin',
    repository: 'nanogram.js',
    type: 'fork',
  },
};
