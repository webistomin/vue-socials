import { Story } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import { TBaseSocialPropsOptions } from '@/mixins/BaseSocial/BaseSocial';
import SYammer, { ISYammerShareOptions } from '../SYammer';

export default {
  title: 'Share/SYammer',
  component: SYammer,
};

const Template: Story<TBaseSocialPropsOptions<ISYammerShareOptions>> = (args) => ({
  components: { SYammer },

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
    <s-yammer
      class="base-social"
      v-bind="args"
      @popup-close="onClose"
      @popup-open="onOpen"
      @popup-block="onBlock"
      @popup-focus="onFocus"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" preserveAspectRatio="xMidYMid" viewBox="0 0 256 218" aria-hidden="true" focusable="false">
        <path fill="#000000" d="M245.767868 97.8609328c-.536699-.0267015-1.1001-.0320418-1.687531-.0320418-9.842155.018691-80.614351 7.780803-77.063058 14.992865 3.537942 7.137298 47.11738 10.600476 78.176508 10.613826 6.509814-1.129471 11.22529-7.011801 10.776706-13.737896-.419213-5.903691-4.702126-10.6218372-10.202625-11.8367532M221.768604 172.71044c-27.24082-14.923441-67.108756-32.866816-73.645271-28.295528-6.581908 4.606001 51.72071 45.464561 60.345279 50.209409.526018.285705 1.017325.547379 1.48994.798373 5.420395 1.578056 11.433562-.496647 14.645746-5.481808 3.631398-5.674058 2.320356-13.107742-2.835694-17.230446m0-122.8400249c5.15605-4.122704 6.467092-11.5563879 2.835694-17.225106-3.212184-4.987831-9.225351-7.0518531-14.645746-5.4791377-.472615.2429832-.963922.5073276-1.48994.790363-8.624569 4.7528582-66.927187 45.6034079-60.345279 50.2147485 6.536515 4.5686182 46.404451-13.3720866 73.645271-28.3008678zM58.4091277 159.242228c-8.1065604 22.888484-15.6096681 33.606446-32.8481248 33.606446-1.6661706 0-7.4657257-.341778-7.839546-.37649-5.5619122-.285706-10.75534441 3.332341-12.2532958 8.923625-1.71957344 6.352275 2.01061925 12.8968 8.3281825 14.707159 4.5686183.803713 9.2600632 1.100099 13.4682118 1.100099 31.7747266 0 42.2790774-18.293164 52.7700774-44.999955L142.024721 17.5616595c2.234912-7.0064607-1.65816-14.49621763-8.621898-16.72578878-6.843582-2.17616825-14.090356 1.44187835-16.541549 8.09053961L73.303197 124.049716h-.6835571L26.7999502 8.06128333C23.6999118 1.50607714 16.0312551-1.69275668 9.11290914.8999542 2.0156635 3.56208885-1.62908454 11.3268708.70195212 18.4668387L58.4091277 159.242228z"/>
      </svg>
    </s-yammer>
`,
});

export const Default = Template.bind({});
Default.args = {
  windowFeatures: {
    width: 900,
    height: 600,
  },
  shareOptions: {
    url: 'https://github.com/',
    text: 'Text',
    groupId: '',
  },
  useNativeBehavior: false,
};
