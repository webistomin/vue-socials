import { Story } from '@storybook/vue3';
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

const Template: Story<TBaseCountPropsOptions<ISGithubRepoCountShareOptions>> = (args) => ({
  components: { SGithubRepoCount },

  setup() {
    const onLoad = action('emit load');
    const onLoading = action('emit loading');
    const onError = action('emit error');

    return {
      args,
      onLoad,
      onLoading,
      onError,
    };
  },

  template: `
    <s-github-repo-count
      class="base-social"
      v-bind="args"
      @load="onLoad"
      @loading="onLoading"
      @error="onError"
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
