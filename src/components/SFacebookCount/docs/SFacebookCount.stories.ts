import { Story } from '@storybook/vue';
import SFacebookCount from '../SFacebookCount';

export default {
  title: 'Count/SFacebookCount',
  component: SFacebookCount,
};

const Template: Story = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SFacebookCount },
  template: '<s-facebook-count v-bind="$props"></s-facebook-count>',
});

export const Default = Template.bind({});
Default.args = {
  shareOptions: {
    id: 'https://github.com/',
    fields: ['id', 'og_object'],
    accessToken: '1729830587180291|102e6d79cda2fa63b65c99c039eed12a',
  },
};
