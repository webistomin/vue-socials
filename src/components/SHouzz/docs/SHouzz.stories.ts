import { Story } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import SHouzz from '../SHouzz';

export default {
  title: 'Share/SHouzz',
  component: SHouzz,
};

const Template: Story = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SHouzz },
  methods: {
    onClose: action('emit close'),
    onOpen: action('emit open'),
    onBlock: action('emit block'),
    onFocus: action('emit focus'),
  },
  template: `
    <s-houzz
      class="base-social"
      v-bind="$props"
      @popup-close="onClose"
      @popup-open="onOpen"
      @popup-block="onBlock"
      @popup-focus="onFocus"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M14.681 24h8.069V10.367L6.599 5.746V0H1.25v24h8.069v-7.556h5.362z"/>
      </svg>
    </s-houzz>
`,
});

export const Default = Template.bind({});
Default.args = {
  windowFeatures: {},
  shareOptions: {
    url: 'https://github.com/',
    id: '123',
    imageUrl: 'url',
    title: 'Title',
    category: ['category'],
  },
};
