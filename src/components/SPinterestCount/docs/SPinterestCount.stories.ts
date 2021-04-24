import { Story } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import { TBaseCountPropsOptions } from '@/mixins/BaseCount/BaseCount';
import SPinterestCount, { ISPinterestCountShareOptions } from '../SPinterestCount';
import SPinterestCountMDX from './SPinterestCount.mdx';

export default {
  title: 'Count/SPinterestCount',
  component: SPinterestCount,
  parameters: {
    docs: {
      page: SPinterestCountMDX,
    },
  },
};

const Template: Story<TBaseCountPropsOptions<ISPinterestCountShareOptions>> = (args) => ({
  components: { SPinterestCount },

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
    <s-pinterest-count
      class="base-social"
      v-bind="args"
      @load="onLoad"
    >
    </s-pinterest-count>
  `,
});

export const Default = Template.bind({});
Default.args = {
  shareOptions: {
    url: 'https://github.com/',
  },
};
