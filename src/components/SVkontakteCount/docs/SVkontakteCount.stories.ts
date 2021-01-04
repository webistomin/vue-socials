import { Story } from '@storybook/vue';
import SVkontakteCount from '../SVkontakteCount';

export default {
  title: 'Count/SVkontakteCount',
  component: SVkontakteCount,
};

const Template: Story = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SVkontakteCount },
  template: '<s-vkontakte-count v-bind="$props"></s-vkontakte-count>',
});

export const Default = Template.bind({});
Default.args = {
  windowFeatures: {},
  shareOptions: {
    url: 'https://github.com/',
  },
};
