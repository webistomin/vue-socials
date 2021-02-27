import { Story } from '@storybook/vue';
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

const Template: Story<TBaseSocialPropsOptions<ISTumblrCountShareOptions>> = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { STumblrCount },
  methods: {
    onLoad: action('emit load'),
  },
  template: `
    <s-tumblr-count
      class="base-social"
      v-bind="$props"
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
