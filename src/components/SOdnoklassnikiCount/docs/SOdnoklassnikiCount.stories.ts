import { Story } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { TBaseCountPropsOptions } from '@/mixins/BaseCount/BaseCount';
import SOdnoklassnikiCount, { ISOdnoklassnikiCountShareOptions } from '../SOdnoklassnikiCount';
import SOdnoklassnikiCountMDX from './SOdnoklassnikiCount.mdx';

export default {
  title: 'Count/SOdnoklassnikiCount',
  component: SOdnoklassnikiCount,
  parameters: {
    docs: {
      page: SOdnoklassnikiCountMDX,
    },
  },
};

const Template: Story<TBaseCountPropsOptions<ISOdnoklassnikiCountShareOptions>> = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SOdnoklassnikiCount },
  methods: {
    onLoad: action('emit load'),
  },
  template: `
    <s-odnoklassniki-count
      class="base-social"
      v-bind="$props"
      @load="onLoad"
    >
    </s-odnoklassniki-count>
  `,
});

export const Default = Template.bind({});
Default.args = {
  shareOptions: {
    ref: 'https://github.com/',
  },
};
