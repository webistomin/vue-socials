import { Story } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import { TBaseSocialPropsOptions } from '@/mixins/BaseSocial/BaseSocial';
import STumblrCount, { ISTumblrCountShareOptions } from '../STumblrCount';
import STumblrCountMDX from './STumblrCount.mdx';

export default {
  title: 'Count/STumblrCount',
  component: STumblrCount,
  parameters: {
    docs: {
      page: STumblrCountMDX,
    },
  },
};

const Template: Story<TBaseSocialPropsOptions<ISTumblrCountShareOptions>> = (args) => ({
  components: { STumblrCount },

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
    <s-tumblr-count
      class="base-social"
      v-bind="args"
      @load="onLoad"
    >
    </s-tumblr-count>
  `,
});

export const Default = Template.bind({});
Default.args = {
  shareOptions: {
    url: 'https://github.com/',
  },
};
