import SFacebook from '../SFacebook';

export default {
  title: 'Share/SFacebook',
  component: SFacebook,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SFacebook },
  template: '<s-facebook v-bind="$props">Share</s-facebook>',
});

export const Default = Template.bind({});
Default.args = {
  windowFeatures: {},
  shareOptions: {
    url: 'https://github.com/',
  },
};
