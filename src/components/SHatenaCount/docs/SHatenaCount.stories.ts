import { Story } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import { TBaseSocialPropsOptions } from '@/mixins/BaseSocial/BaseSocial';
import SHatenaCount, { ISHatenaCountShareOptions } from '../SHatenaCount';
import SHatenaCountMDX from './SHatenaCount.mdx';

export default {
  title: 'Count/SHatenaCount',
  component: SHatenaCount,
  parameters: {
    docs: {
      page: SHatenaCountMDX,
    },
  },
};

const Template: Story<TBaseSocialPropsOptions<ISHatenaCountShareOptions>> = (args) => ({
  components: { SHatenaCount },

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
    <s-hatena-count
      class="base-social"
      v-bind="args"
      @load="onLoad"
      @error="onError"
      @loading="onLoading"
    >
    </s-hatena-count>
  `,
});

export const Default = Template.bind({});
Default.args = {
  shareOptions: {
    url: 'https://github.com/',
  },
};
