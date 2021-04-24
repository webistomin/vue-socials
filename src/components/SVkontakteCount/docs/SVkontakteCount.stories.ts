import { Story } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import { TBaseCountPropsOptions } from '@/mixins/BaseCount/BaseCount';
import SVkontakteCount, { ISVkontakteCountShareOptions } from '../SVkontakteCount';
import SVkontakteCountMDX from './SVkontakteCount.mdx';

export default {
  title: 'Count/SVkontakteCount',
  component: SVkontakteCount,
  parameters: {
    docs: {
      page: SVkontakteCountMDX,
    },
  },
};

const Template: Story<TBaseCountPropsOptions<ISVkontakteCountShareOptions>> = (args) => ({
  components: { SVkontakteCount },

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
    <s-vkontakte-count
      class="base-social"
      v-bind="args"
      @load="onLoad"
    >
    </s-vkontakte-count>
  `,
});

export const Default = Template.bind({});
Default.args = {
  shareOptions: {
    url: 'https://github.com/',
  },
};
