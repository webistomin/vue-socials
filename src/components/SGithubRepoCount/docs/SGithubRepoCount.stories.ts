import { Story } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { TBaseCountPropsOptions } from '@/mixins/BaseCount/BaseCount';
import SGithubRepoCount, { ISGithubRepoCountShareOptions } from '../SGithubRepoCount';
import SGithubRepoCountMDX from './SGithubRepoCount.mdx';

export default {
  title: 'Count/SGithubRepoCount',
  component: SGithubRepoCount,
  parameters: {
    docs: {
      page: SGithubRepoCountMDX,
    },
  },
};

const Template: Story<TBaseCountPropsOptions<ISGithubRepoCountShareOptions>> = (_args, { argTypes }) => ({
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
