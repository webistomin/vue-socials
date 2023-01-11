import { Story } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import { DEFAULT_WINDOW_FEATURES, TBaseSocialPropsOptions } from '@/mixins/BaseSocial/BaseSocial';
import SLiveJournal, { ISLiveJournalShareOptions } from '../SLiveJournal';
import SLiveJournalMDX from './SLiveJournal.mdx';

export default {
  title: 'Share/SLiveJournal',
  component: SLiveJournal,
  parameters: {
    docs: {
      page: SLiveJournalMDX,
    },
  },
};

const Template: Story<TBaseSocialPropsOptions<ISLiveJournalShareOptions>> = (args) => ({
  components: { SLiveJournal },

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
    <s-live-journal
      class="base-social"
      v-bind="args"
      @popup-close="onClose"
      @popup-open="onOpen"
      @popup-block="onBlock"
      @popup-focus="onFocus"
    >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 304.999 304.999" aria-hidden="true" focusable="false">
      <path d="M160.662 19.47c-18.934 0-37.323 3.668-54.693 10.881L76.353.732c-.819-.82-2.094-.967-3.082-.359C44.436 18.201 19.773 42.865 1.947 71.699c-.61.986-.462 2.262.358 3.082l28.39 28.383c-8.491 18.637-12.808 38.5-12.808 59.074C17.887 240.957 81.936 305 160.662 305c78.721 0 142.765-64.043 142.765-142.762 0-78.723-64.044-142.768-142.765-142.768zm56.563 129.194l9.943 42.082 9.543 44.395-44.337-9.533-42.055-9.893L36.712 102.111c14.252-29.338 38.339-52.619 68.114-65.832l112.399 112.385z"/>
      <path d="M221.76 187.396l-7.522-33.023c-25.891 11.889-46.404 32.402-58.283 58.295l33.023 7.52c7.011-14.023 18.769-25.778 32.782-32.792z"/>
    </svg>
    </s-live-journal>
`,
});

export const Default = Template.bind({});
Default.args = {
  windowFeatures: DEFAULT_WINDOW_FEATURES,
  shareOptions: {
    url: 'https://github.com/',
    subject: 'Title',
  },
  useNativeBehavior: false,
};
