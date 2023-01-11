import { Story } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import { TBaseCountPropsOptions } from '@/mixins/BaseCount/BaseCount';
import SGithubGistCount, { ISGithubGistCountShareOptions } from '../SGithubGistCount';
import SGithubGistCountMDX from './SGithubGistCount.mdx';

export default {
  title: 'Count/SGithubGistCount',
  component: SGithubGistCount,
  parameters: {
    docs: {
      page: SGithubGistCountMDX,
    },
  },
};

const Template: Story<TBaseCountPropsOptions<ISGithubGistCountShareOptions>> = (args) => ({
  components: { SGithubGistCount },

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
    <s-github-gist-count
      class="base-social"
      v-bind="args"
      @load="onLoad"
      @loading="onLoading"
      @error="onError"
    >
    </s-github-gist-count>
  `,
});

export const Default = Template.bind({});
Default.args = {
  shareOptions: {
    gistId: 'e3683b03ba936ade91d33dbc721cd6d8',
    type: 'fork',
  },
};
