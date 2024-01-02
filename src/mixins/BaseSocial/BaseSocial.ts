/**
 * Hey!
 *
 * Base socials mixin used for every social component
 * which have share window. It provides a method for window.open()
 * and has props for window features. Also has a method for component render.
 */

import {
  defineComponent,
  VNode,
  PropType,
  h,
  DefineComponent,
  markRaw,
} from 'vue';
import { IWindowFeatures } from '@/types/common/windowFeatures';
import getFormattedWindowFeatures from '@/utils/getFormattedWindowFeatures';
import getPopupClientRect from '@/utils/getPopupClientRect';
import { isUndefined } from '@/utils/inspect';

export interface IBaseSocialDataOptions {
  dialog: {
    shareDialog: Window | null;
    shareDialogCloseIntervalId: number | undefined
  }
}

export type TBaseSocialPropsOptions<T> = {
  windowFeatures: IWindowFeatures
  shareOptions: T;
  useNativeBehavior: boolean;
};

export type TBaseSocialMixin<T> = DefineComponent<TBaseSocialPropsOptions<T>>;

export const DEFAULT_WINDOW_FEATURES = {
  width: 600,
  height: 540,
};

/**
 * Wrapper around Vue mixin to pass parameters inside.
 * We use multiple parameters instead of a single object because
 * it causes problems with tree-shaking. I don't know why.
 * A little bit inconvenient, but overall OK :)
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function BaseSocials<T>(
  name: string,
  customWindowFeatures?: IWindowFeatures,
  customShareOptions?: T,
  customAriaLabel?: string,
  isShareOptionsRequired?: boolean,
  isWindowFeaturesRequired?: boolean,
) {
  return /* #__PURE__ */defineComponent({
    props: {
      /**
       * Requested features of the new window
       * @link https://developer.mozilla.org/en-US/docs/Web/API/Window/open#Window_features
       */
      windowFeatures: {
        type: Object as PropType<IWindowFeatures>,
        default: () => customWindowFeatures || DEFAULT_WINDOW_FEATURES,
        required: isWindowFeaturesRequired,
      },
      /**
       * Share parameters for social network
       */
      shareOptions: {
        type: Object as PropType<T>,
        default: () => customShareOptions || {} as T,
        required: isShareOptionsRequired || true,
      },
      /**
       * Use native link behavior instead of window.open()
       */
      useNativeBehavior: {
        type: Boolean as PropType<boolean>,
        default: false,
      },
    },

    data(): IBaseSocialDataOptions {
      return {
        dialog: markRaw({
          shareDialog: null,
          shareDialogCloseIntervalId: undefined,
        }),
      };
    },

    emits: ['click', 'popup-block', 'popup-open', 'popup-close', 'popup-focus'],

    /**
     * Make sure interval has been cleared
     */
    beforeUnmount() {
      window.clearInterval(this.dialog.shareDialogCloseIntervalId);
    },

    computed: {
      /**
       * Merge default and user window features
       */
      mergedWindowFeatures(): IWindowFeatures {
        const { windowFeatures } = this;
        /**
         * We use `Object.assign` instead of the spread operator
         * to prevent adding the polyfill (about 150 bytes gzipped)
         */
        return Object.assign({}, DEFAULT_WINDOW_FEATURES, windowFeatures);
      },
      /**
       * Calculate the aria-label for a link.
       * It replaces @s in a string with a social network name.
       */
      ariaLabel(): string {
        const { $attrs } = this;
        const { target } = $attrs;
        let label = customAriaLabel || 'Share this with @s.';

        if (target === '_blank' || isUndefined(target)) {
          label += ' (opens in new window)';
        }

        return label.replace(/@s/g, name);
      },
    },

    methods: {
      /**
       * Create new share popup from url
       * @link https://developer.mozilla.org/en-US/docs/Web/API/Window/open#Syntax
       */
      openShareDialog(url: string): void {
        const { mergedWindowFeatures } = this;
        const { width = DEFAULT_WINDOW_FEATURES.width, height = DEFAULT_WINDOW_FEATURES.height } = mergedWindowFeatures;

        const shareDialogClientRect = getPopupClientRect(width, height);
        const formattedFeatures = getFormattedWindowFeatures(Object.assign({}, mergedWindowFeatures, shareDialogClientRect));
        /**
         * If the pointer to the window object in memory does not exist
         * or if such pointer exists but the window was closed
         */
        if (this.dialog.shareDialog === null || this.dialog.shareDialog?.closed) {
          /**
           * then create it. The new window will be created and
           * will be brought on top of any other window.
           */
          this.dialog.shareDialog = window.open(
            url,
            '_blank',
            formattedFeatures,
          );
          /**
           * If window.open has been blocked – emit 'block' event and then do nothing
           * If not – emit 'open' event
           */
          if (!this.dialog.shareDialog) {
            this.$emit('popup-block');
            return;
          }

          this.$emit('popup-open');
          /**
           * window.onbeforeunload event didn't work because of Same Origin Policy
           * So we check if it has been closed every 300 ms
           * @link https://atashbahar.com/post/2010-04-27-detect-when-a-javascript-popup-window-gets-closed
           */
          this.dialog.shareDialogCloseIntervalId = window.setInterval(() => {
            if (this.dialog.shareDialog === null || this.dialog.shareDialog?.closed) {
              window.clearInterval(this.dialog.shareDialogCloseIntervalId);
              this.$emit('popup-close');
              /**
               * Unset reference to the popup window
               * @link https://web.dev/detached-window-memory-leaks/#solution-unset-references
               */
              this.dialog.shareDialog = null;
            }
          }, 300);
        } else {
          /**
           * else the window reference must exist and the window
           * is not closed; therefore, we can bring it back on top of any other
           * window with the focus() method. There would be no need to re-create
           * the window or to reload the referenced resource.
           */
          this.dialog.shareDialog.focus();
          this.$emit('popup-focus');
        }
      },
      /**
       * Create new share component
       */
      generateComponent(url: string): VNode {
        return h(
          'a',
          {
            href: url,
            target: '_blank',
            rel: 'nofollow noopener noreferrer',
            'aria-label': this.ariaLabel,
            onClick: (event: Event) => {
              if (!this.useNativeBehavior) {
                event.preventDefault();
                this.openShareDialog(url);
              }

              this.$emit('click');
            },
          },
          this.$slots.default?.(),
        );
      },
    },
  });
}
