import { Story } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import { DEFAULT_WINDOW_FEATURES, TBaseSocialPropsOptions } from '@/mixins/BaseSocial/BaseSocial';
import SGoogleBookmarks, { ISGoogleBookmarksShareOptions } from '../SGoogleBookmarks';
import SGoogleBookmarksMDX from './SGoogleBookmarks.mdx';

export default {
  title: 'Share/SGoogleBookmarks',
  component: SGoogleBookmarks,
  parameters: {
    docs: {
      page: SGoogleBookmarksMDX,
    },
  },
};

const Template: Story<TBaseSocialPropsOptions<ISGoogleBookmarksShareOptions>> = (args) => ({
  components: { SGoogleBookmarks },

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
    <s-google-bookmarks
      class="base-social"
      v-bind="args"
      @popup-close="onClose"
      @popup-open="onOpen"
      @popup-block="onBlock"
      @popup-focus="onFocus"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M0 0v24h24v-24h-24zm11.979 4c2.859 0 5.69 1.515 7.145 4.369h-6.195c-1.116 0-1.837-.025-2.618.386-.917.483-1.609 1.378-1.851 2.43l-2.528-4.398c1.619-1.885 3.841-2.787 6.047-2.787zm2.677 8c0 1.467-1.192 2.66-2.659 2.66s-2.659-1.193-2.659-2.66 1.192-2.661 2.659-2.661 2.659 1.194 2.659 2.661zm-10.656-.029c0-1.476.41-2.978 1.297-4.338.877 1.528 2.806 4.889 3.536 6.15.957 1.651 2.703 2.143 4.195 1.699l-2.58 4.368c-3.964-.779-6.448-4.247-6.448-7.879zm7.499 8.013c.981-1.655 3.006-5.072 3.64-6.166.842-1.451.571-3.323-.671-4.479h5.072c.313.891.46 1.788.46 2.664 0 4.408-3.709 8.277-8.501 7.981z"/>
      </svg>
    </s-google-bookmarks>
`,
});

export const Default = Template.bind({});
Default.args = {
  windowFeatures: DEFAULT_WINDOW_FEATURES,
  shareOptions: {
    url: 'https://github.com/',
    title: 'Title',
    annotation: 'Annotation',
    tags: ['tag'],
  },
  useNativeBehavior: false,
};
