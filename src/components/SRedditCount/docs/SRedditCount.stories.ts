import { Story } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import { TBaseCountPropsOptions } from '@/mixins/BaseCount/BaseCount';
import SRedditCount, { ISRedditCountShareOptions } from '../SRedditCount';
import SRedditCountMDX from './SRedditCount.mdx';

export default {
  title: 'Count/SRedditCount',
  component: SRedditCount,
  parameters: {
    docs: {
      page: SRedditCountMDX,
    },
  },
};

const Template: Story<TBaseCountPropsOptions<ISRedditCountShareOptions>> = (args) => ({
  components: { SRedditCount },

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
    <s-reddit-count
      class="base-social"
      v-bind="args"
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
