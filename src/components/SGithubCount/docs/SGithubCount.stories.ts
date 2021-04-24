import { Story } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import { TBaseCountPropsOptions } from '@/mixins/BaseCount/BaseCount';
import SGithubCount, { ISGithubCountShareOptions } from '../SGithubCount';
import SGithubCountMDX from './SGithubCount.mdx';

export default {
  title: 'Count/SGithubCount',
  component: SGithubCount,
  parameters: {
    docs: {
      page: SGithubCountMDX,
    },
  },
};

const Template: Story<TBaseCountPropsOptions<ISGithubCountShareOptions>> = (args) => ({
  components: { SGithubCount },

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
    <s-github-count
      class="base-social"
      v-bind="args"
      @load="onLoad"
      @loading="onLoading"
      @error="onError"
    >
    </s-github-count>
  `,
});

export const Default = Template.bind({});
Default.args = {
  tag: 'span',
  shareOptions: {
    username: 'webistomin',
    type: 'follow',
  },
};
