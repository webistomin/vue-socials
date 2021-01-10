import { Story } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import SGithubCount, { ISGithubCountShareOptions } from '../SGithubCount';

interface ISGithubCountStoryArgs {
  shareOptions: ISGithubCountShareOptions;
}

export default {
  title: 'Count/SGithubCount',
  component: SGithubCount,
};

const Template: Story<ISGithubCountStoryArgs> = (_args, { argTypes }) => ({
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
  shareOptions: {
    username: 'webistomin',
    type: 'follow',
  },
};
