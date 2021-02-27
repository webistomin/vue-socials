import { Story } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { TBaseCountPropsOptions } from '@/mixins/BaseCount/BaseCount';
import SGithubGistCount, { ISGithubGistCountShareOptions } from '../SGithubGistCount';
import SGithubGistCountMDX from './SGithubGistCount.mdx';

export default {
  title: 'Count/SGithubGistCount',
  component: SGithubGistCount,
  parameters: {
    docs: {
      page: SGithubGistCountMDX,
    },
  },
};

const Template: Story<TBaseCountPropsOptions<ISGithubGistCountShareOptions>> = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SGithubGistCount },
  methods: {
    onLoad: action('emit load'),
  },
  template: `
    <s-github-gist-count
      class="base-social"
      v-bind="$props"
      @load="onLoad"
    >
    </s-github-gist-count>
  `,
});

export const Default = Template.bind({});
Default.args = {
  shareOptions: {
    gistId: 'e3683b03ba936ade91d33dbc721cd6d8',
    type: 'fork',
  },
};
