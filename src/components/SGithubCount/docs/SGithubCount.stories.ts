import { Story } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { TBaseCountPropsOptions } from '@/mixins/BaseCount/BaseCount';
import SGithubCount, { ISGithubCountShareOptions } from '../SGithubCount';
import SGithubCountMDX from './SGithubCount.mdx';

export default {
  title: 'Count/SGithubCount',
  component: SGithubCount,
  parameters: {
    docs: {
      page: SGithubCountMDX,
    },
  },
};

const Template: Story<TBaseCountPropsOptions<ISGithubCountShareOptions>> = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SGithubCount },
  methods: {
    onLoad: action('emit load'),
    onLoading: action('emit loading'),
    onError: action('emit error'),
  },
  template: `
    <s-github-count
      class="base-social"
      v-bind="$props"
      @load="onLoad"
      @loading="onLoading"
      @error="onError"
    >
    </s-github-count>
  `,
});

export const Default = Template.bind({});
Default.args = {
  tag: 'span',
  shareOptions: {
    username: 'webistomin',
    type: 'follow',
  },
};
