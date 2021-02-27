import { Story } from '@storybook/vue';
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

const Template: Story<TBaseCountPropsOptions<ISPinterestCountShareOptions>> = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SPinterestCount },
  methods: {
    onLoad: action('emit load'),
  },
  template: `
    <s-pinterest-count
      class="base-social"
      v-bind="$props"
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
