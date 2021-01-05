import { Story } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import SVkontakteCount from '../SVkontakteCount';

export default {
  title: 'Count/SVkontakteCount',
  component: SVkontakteCount,
};

const Template: Story = (_args, { argTypes }) => ({
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
