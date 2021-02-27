import { Story } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { TBaseCountPropsOptions } from '@/mixins/BaseCount/BaseCount';
import SRedditCount, { ISRedditCountShareOptions } from '../SRedditCount';
import SRedditCountMDX from './SRedditCount.mdx';

export default {
  title: 'Count/SRedditCount',
  component: SRedditCount,
  parameters: {
    docs: {
      page: SRedditCountMDX,
    },
  },
};

const Template: Story<TBaseCountPropsOptions<ISRedditCountShareOptions>> = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SRedditCount },
  methods: {
    onLoad: action('emit load'),
  },
  template: `
    <s-reddit-count
      class="base-social"
      v-bind="$props"
      @load="onLoad"
    >
    </s-reddit-count>
  `,
});

export const Default = Template.bind({});
Default.args = {
  shareOptions: {
    url: 'https://github.com/',
  },
};
