import SFacebookCount from '../SFacebookCount';

export default {
  title: 'Count/SFacebookCount',
  component: SFacebookCount,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SFacebookCount },
  template: '<s-facebook-count v-bind="$props"></s-facebook-count>',
});

export const Default = Template.bind({});
Default.args = {
  shareOptions: {
    url: 'https://github.com/',
  },
};
