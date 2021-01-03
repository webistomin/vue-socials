/**
 * Hey!
 *
 * Base socials mixin used for every social component
 * which have share window. It provides a method for window.open()
 * and has props for window features.
 */

import Vue, { PropOptions } from 'vue';
import { IWindowFeatures } from '@/types/windowFeatures';
import getFormattedWindowFeatures from '@/utils/getFormattedWindowFeatures';
import getPopupClientRect from '@/utils/getPopupClientRect';

const DEFAULT_SHARE_POPUP_WIDTH = 650;
const DEFAULT_SHARE_POPUP_HEIGHT = 570;

export default /* #__PURE__ */Vue.extend({
  props: {
    /**
     * Requested features of the new window
     * @link https://developer.mozilla.org/en-US/docs/Web/API/Window/open#Window_features
     */
    windowFeatures: {
      type: Object,
      default: () => ({
        width: DEFAULT_SHARE_POPUP_WIDTH,
        height: DEFAULT_SHARE_POPUP_HEIGHT,
      }),
    } as PropOptions<IWindowFeatures>,
  },

  data() : {
    shareDialogCloseIntervalId: number | undefined,
  } {
    return {
      shareDialogCloseIntervalId: undefined,
    };
  },

  /**
   * Make sure interval has been cleared
   */
  beforeDestroy() {
    window.clearInterval(this.shareDialogCloseIntervalId);
  },

  methods: {
    /**
     * Create new share popup from url
     * @link https://developer.mozilla.org/en-US/docs/Web/API/Window/open#Syntax
     */
    openShareDialog(url: string): void {
      const { windowFeatures } = this;
      const { width = DEFAULT_SHARE_POPUP_WIDTH, height = DEFAULT_SHARE_POPUP_HEIGHT } = windowFeatures;

      const shareDialogClientRect = getPopupClientRect(width, height);
      /**
       * We use `Object.assign` instead of the spread operator
       * to prevent adding the polyfill (about 150 bytes gzipped)
       */
      const formattedFeatures = getFormattedWindowFeatures(Object.assign({}, shareDialogClientRect, windowFeatures));

      let shareDialog = window.open(
        url,
        '_blank',
        formattedFeatures,
      );

      /**
       * If window.open has been blocked – emit event and do nothing
       */
      if (!shareDialog) {
        this.$emit('block');
        return;
      }

      this.$emit('open');
      shareDialog.focus();

      /**
       * window.onbeforeunload event didn't work because of Same Origin Policy
       * So we check if it has been closed every 300 ms
       * @link https://atashbahar.com/post/2010-04-27-detect-when-a-javascript-popup-window-gets-closed
       */
      this.shareDialogCloseIntervalId = window.setInterval(() => {
        if (shareDialog === null || (shareDialog && shareDialog.closed)) {
          window.clearInterval(this.shareDialogCloseIntervalId);
          this.$emit('close');
          /**
           * Unset reference to the popup window
           * @link https://web.dev/detached-window-memory-leaks/#solution-unset-references
           */
          shareDialog = null;
        }
      }, 300);
    },
  },
});
