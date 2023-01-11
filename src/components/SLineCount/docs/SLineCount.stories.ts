import { Story } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import { TBaseCountPropsOptions } from '@/mixins/BaseCount/BaseCount';
import SLineCount, { ISLineCountShareOptions } from '../SLineCount';

export default {
  title: 'Count/SLineCount',
  component: SLineCount,
};

const Template: Story<TBaseCountPropsOptions<ISLineCountShareOptions>> = (args) => ({
  components: { SLineCount },

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
    <s-line-count
      class="base-social"
      v-bind="args"
      @load="onLoad"
      @error="onError"
      @loading="onLoading"
    >
    </s-line-count>
  `,
});

export const Default = Template.bind({});
Default.args = {
  shareOptions: {
    url: 'https://github.com/',
  },
};
