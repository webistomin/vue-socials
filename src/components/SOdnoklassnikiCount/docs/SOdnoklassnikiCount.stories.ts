import { Story } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import { TBaseCountPropsOptions } from '@/mixins/BaseCount/BaseCount';
import SOdnoklassnikiCount, { ISOdnoklassnikiCountShareOptions } from '../SOdnoklassnikiCount';
import SOdnoklassnikiCountMDX from './SOdnoklassnikiCount.mdx';

export default {
  title: 'Count/SOdnoklassnikiCount',
  component: SOdnoklassnikiCount,
  parameters: {
    docs: {
      page: SOdnoklassnikiCountMDX,
    },
  },
};

const Template: Story<TBaseCountPropsOptions<ISOdnoklassnikiCountShareOptions>> = (args) => ({
  components: { SOdnoklassnikiCount },

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
    <s-odnoklassniki-count
      class="base-social"
      v-bind="args"
      @load="onLoad"
    >
    </s-odnoklassniki-count>
  `,
});

export const Default = Template.bind({});
Default.args = {
  shareOptions: {
    ref: 'https://github.com/',
  },
};
