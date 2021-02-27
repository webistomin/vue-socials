import { Story } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { TBaseCountPropsOptions } from '@/mixins/BaseCount/BaseCount';
import SVkontakteCount, { ISVkontakteCountShareOptions } from '../SVkontakteCount';
import SVkontakteCountMDX from './SVkontakteCount.mdx';

export default {
  title: 'Count/SVkontakteCount',
  component: SVkontakteCount,
  parameters: {
    docs: {
      page: SVkontakteCountMDX,
    },
  },
};

const Template: Story<TBaseCountPropsOptions<ISVkontakteCountShareOptions>> = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SVkontakteCount },
  methods: {
    onLoad: action('emit load'),
  },
  template: `
    <s-vkontakte-count
      class="base-social"
      v-bind="$props"
      @load="onLoad"
    >
    </s-vkontakte-count>
  `,
});

export const Default = Template.bind({});
Default.args = {
  shareOptions: {
    url: 'https://github.com/',
  },
};
