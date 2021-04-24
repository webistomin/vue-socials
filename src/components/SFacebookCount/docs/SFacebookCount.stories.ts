import { Story } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import { TBaseCountPropsOptions } from '@/mixins/BaseCount/BaseCount';
import SFacebookCount, { ISFacebookCountShareOptions } from '../SFacebookCount';
import SFacebookCountMDX from './SFacebookCount.mdx';

export default {
  title: 'Count/SFacebookCount',
  component: SFacebookCount,
  parameters: {
    docs: {
      page: SFacebookCountMDX,
    },
  },
};

const Template: Story<TBaseCountPropsOptions<ISFacebookCountShareOptions>> = (args) => ({
  components: { SFacebookCount },

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
    <s-facebook-count
      class="base-social"
      v-bind="args"
      @load="onLoad"
      @error="onError"
      @loading="onLoading"
    >
    </s-facebook-count>`,
});

export const Default = Template.bind({});
Default.args = {
  tag: 'span',
  shareOptions: {
    id: 'https://github.com/',
    fields: ['id', 'og_object'],
    accessToken: '',
  },
};
