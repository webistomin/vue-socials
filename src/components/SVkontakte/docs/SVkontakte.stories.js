import SVkontakte from '../SVkontakte';

export default {
  title: 'Share/SVkontakte',
  component: SVkontakte,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SVkontakte },
  template: '<s-vkontakte v-bind="$props">Share</s-vkontakte>',
});

export const Default = Template.bind({});
Default.args = {
  windowFeatures: {},
  shareOptions: {
    url: 'https://github.com/',
  },
};
