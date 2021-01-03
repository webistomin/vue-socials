import MyButton from '../SFacebookCount';

export default {
  title: 'Example/Fb',
  component: MyButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  methods: {
    onClose() {
      console.log('close');
    },
    onOpen() {
      console.log('open');
    },
  },
  template: '<my-button v-bind="$props" @close="onClose" @open="onOpen">Share</my-button>',
});

export const Primary = Template.bind({});
Primary.args = {
  windowFeatures: {},
  shareOptions: {
    url: 'https://github.com/',
  },
};
