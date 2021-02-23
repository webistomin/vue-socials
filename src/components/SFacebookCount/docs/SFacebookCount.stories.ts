import { Story } from '@storybook/vue';
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

const Template: Story<TBaseCountPropsOptions<ISFacebookCountShareOptions>> = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SFacebookCount },
  methods: {
    onLoad: action('emit load'),
    onLoading: action('emit loading'),
    onError: action('emit error'),
  },
  template: `
    <s-facebook-count
      class="base-social"
      v-bind="$props"
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
