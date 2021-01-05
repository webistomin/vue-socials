/**
 * Hey!
 *
 * Base socials mixin used for every social component
 * which have share window. It provides a method for window.open()
 * and has props for window features. Also has a method for component render.
 */

import { ExtendedVue } from 'vue/types/vue';
import Vue, { CreateElement, PropOptions, VNode } from 'vue';
import { IWindowFeatures } from '@/types/common/windowFeatures';
import getFormattedWindowFeatures from '@/utils/getFormattedWindowFeatures';
import getPopupClientRect from '@/utils/getPopupClientRect';

const DEFAULT_SHARE_POPUP_WIDTH = 650;
const DEFAULT_SHARE_POPUP_HEIGHT = 570;

export type TBaseSocialMixin<T> = ExtendedVue<Vue,
{
  shareDialog: Window | null;
  shareDialogCloseIntervalId: number | undefined
},
{
  generateComponent(h: CreateElement, url: string, name: string): VNode;
  openShareDialog(url: string): void
},
unknown,
{
  shareOptions: T;
  windowFeatures: IWindowFeatures
}>;

export default function BaseSocials<T>(): TBaseSocialMixin<T> {
  return /* #__PURE__ */Vue.extend({
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
      /**
       * Share parameters for social network
       */
      shareOptions: {
        type: Object,
        required: true,
      } as PropOptions<T>,
    },

    data() : {
      shareDialog: Window | null;
      shareDialogCloseIntervalId: number | undefined,
    } {
      return {
        shareDialog: null,
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

        /**
         * If the pointer to the window object in memory does not exist
         * or if such pointer exists but the window was closed
         */
        if (this.shareDialog === null || this.shareDialog?.closed) {
          /**
           * then create it. The new window will be created and
           * will be brought on top of any other window.
           */
          this.shareDialog = window.open(
            url,
            '_blank',
            formattedFeatures,
          );

          /**
           * If window.open has been blocked – emit 'block' event and then do nothing
           * If not – emit 'open' event
           */
          if (!this.shareDialog) {
            this.$emit('popup-block');
            return;
          }

          this.$emit('popup-open');

          /**
           * window.onbeforeunload event didn't work because of Same Origin Policy
           * So we check if it has been closed every 300 ms
           * @link https://atashbahar.com/post/2010-04-27-detect-when-a-javascript-popup-window-gets-closed
           */
          this.shareDialogCloseIntervalId = window.setInterval(() => {
            if (this.shareDialog === null || this.shareDialog?.closed) {
              window.clearInterval(this.shareDialogCloseIntervalId);
              this.$emit('popup-close');
              /**
               * Unset reference to the popup window
               * @link https://web.dev/detached-window-memory-leaks/#solution-unset-references
               */
              this.shareDialog = null;
            }
          }, 300);
        } else {
          /**
           * else the window reference must exist and the window
           * is not closed; therefore, we can bring it back on top of any other
           * window with the focus() method. There would be no need to re-create
           * the window or to reload the referenced resource.
           */
          this.shareDialog.focus();
          this.$emit('popup-focus');
        }
      },
      /**
       * Create new share component
       */
      generateComponent(h: CreateElement, url: string, name: string): VNode {
        return h(
          'a',
          {
            attrs: {
              href: url,
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
              'aria-label': `Share this with ${name}`,
            },
            on: {
              click: (event: Event) => {
                event.preventDefault();
                this.openShareDialog(url);
              },
            },
          },
          this.$slots.default,
        );
      },
    },
  });
}
