import { Story } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import { DEFAULT_WINDOW_FEATURES, TBaseSocialPropsOptions } from '@/mixins/BaseSocial/BaseSocial';
import SYahoo, { ISYahooShareOptions } from '../SYahoo';

export default {
  title: 'Share/SYahoo',
  component: SYahoo,
};

const Template: Story<TBaseSocialPropsOptions<ISYahooShareOptions>> = (args) => ({
  components: { SYahoo },

  setup() {
    const onClose = action('emit close');
    const onOpen = action('emit open');
    const onBlock = action('emit block');
    const onFocus = action('emit focus');

    return {
      args,
      onClose,
      onOpen,
      onBlock,
      onFocus,
    };
  },

  template: `
    <s-yahoo
      class="base-social"
      v-bind="args"
      @popup-close="onClose"
      @popup-open="onOpen"
      @popup-block="onBlock"
      @popup-focus="onFocus"
    >
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="24" viewBox="0 0 264.58333 73.375368" aria-hidden="true" focusable="false">
      <g fill="#000000" transform="translate(260.95542 41.213839)">
        <path d="M-260.95542-23.351576h15.74097l9.16577 23.44971543 9.28475-23.44971543h15.32641l-23.07818 55.513102h-15.42354l6.31728-14.710096zM-195.47141-24.285092c-11.82693 0-19.30359 10.60691-19.30359 21.1697058 0 11.886248 8.19723 21.3099212 19.07922 21.3099212 8.11755 0 11.17827-4.945745 11.17827-4.945745v3.852645h13.72915v-40.452766h-13.72915v3.677524s-3.41477-4.611285-10.9539-4.611285zm2.92026 12.999928c5.45704 0 8.27307 4.3180081 8.27307 8.2142225 0 4.1954942-3.01696 8.3127463-8.27307 8.3127463-4.35623 0-8.29289-3.559984-8.29289-8.1341932 0-4.6389336 3.16648-8.3927756 8.29289-8.3927756zM-166.06011 17.10119v-58.315029h14.35985v21.680094s3.41082-4.746342 10.5543-4.746342c8.73797 0 13.85746 6.510502 13.85746 15.813727v25.56755h-14.25479V-4.9639552c0-3.148416-1.49969-6.1899038-4.89676-6.1899038-3.45803 0-5.26021 3.0875793-5.26021 6.1899038V17.10119zM-102.80546-24.280304c-13.54405 0-21.60888 10.298919-21.60888 21.3332079 0 12.5572045 9.76468 21.1416311 21.66017 21.1416311 11.529646 0 21.618462-8.1948543 21.618462-20.9309613 0-13.9356097-10.563298-21.5438777-21.669752-21.5438777zm.12933 13.114187c4.784243 0 8.094514 3.9847543 8.094514 8.2340454 0 3.62432286-3.084573 8.0945471-8.094514 8.0945471-4.5906 0-8.03569-3.6823588-8.03569-8.1341932 0-4.2885533 2.86425-8.1943993 8.03569-8.1943993zM-57.212888-24.280304c-13.544038 0-21.608877 10.298919-21.608877 21.3332079 0 12.5572045 9.764684 21.1416311 21.660172 21.1416311 11.529647 0 21.618463-8.1948543 21.618463-20.9309613 0-13.9356097-10.563285-21.5438777-21.669758-21.5438777zm.12933 13.114187c4.784232 0 8.094517 3.9847543 8.094517 8.2340454 0 3.62432286-3.084586 8.0945471-8.094517 8.0945471-4.59061 0-8.035691-3.6823588-8.035691-8.1341932 0-4.2885533 2.864249-8.1943993 8.035691-8.1943993z"/>
        <circle cx="-24.212173" cy="8.4245415" r="9.5354834"/>
        <path d="M-11.543414-4.6137152h-17.166355l15.235424-36.6001238H3.627914z"/>
      </g>
    </svg>
    </s-yahoo>
`,
});

export const Default = Template.bind({});
Default.args = {
  windowFeatures: DEFAULT_WINDOW_FEATURES,
  shareOptions: {
    email: 'mail@gmail.com',
    subject: 'Subject',
    body: 'Hello\nWorld!',
  },
  useNativeBehavior: false,
};
