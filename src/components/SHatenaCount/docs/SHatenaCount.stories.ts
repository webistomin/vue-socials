import { Story } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import SHatenaCount from '../SHatenaCount';

export default {
  title: 'Count/SHatenaCount',
  component: SHatenaCount,
};

const Template: Story = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SHatenaCount },
  methods: {
    onLoad: action('emit load'),
  },
  template: `
    <s-hatena-count
      class="base-social"
      v-bind="$props"
      @load="onLoad"
    >
    </s-hatena-count>
  `,
});

export const Default = Template.bind({});
Default.args = {
  shareOptions: {
    url: 'https://github.com/',
  },
};
