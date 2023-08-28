/**
 * Hey!
 *
 * Base count mixin used for every social count component.
 */

import {
  Component, VNode, defineComponent, h, PropType,
} from 'vue';
import { isUndefined } from '@/utils/inspect';

export type TBaseCountDataOptions<R> = {
  count: number | undefined;
  response: R | null;
  error: Error | string | null;
  isLoading: boolean;
};

export type TBaseCountPropsOptions<T> = {
  tag: Component | string;
  shareOptions: T;
};

/**
 * Wrapper around Vue mixin to pass parameters inside.
 * We use multiple parameters instead of a single object because
 * it causes problems with tree-shaking. I don't know why.
 * A little bit inconvenient, but overall OK :)
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function BaseCount<T, R>(
  name: string,
  customShareOptions?: T,
  isShareOptionsRequired?: boolean,
  customAriaLabel?: string,
) {
  return /* #__PURE__ */ defineComponent({
    props: {
      /**
       * Component tag
       */
      tag: {
        type: [String, Object],
        default: 'span',
      },
      /**
       * Share parameters for social network
       */
      shareOptions: {
        type: Object,
        default: () => customShareOptions || {} as PropType<T>,
        required: isShareOptionsRequired || true,
      },
    },

    data(): TBaseCountDataOptions<R> {
      return {
        count: undefined,
        response: null,
        error: null,
        isLoading: false,
      };
    },

    emits: ['load', 'error', 'loading'],

    computed: {
      /**
       * Calculate the aria-label for a counter.
       * It replaces @s in a string with a social network name
       * and @c with a count.
       */
      ariaLabel(): string {
        const { count } = this;
        const label = customAriaLabel || '@c people share this on @s.';

        if (!isUndefined(count)) {
          return label
            .replace(/@c/g, String(count))
            .replace(/@s/g, name);
        }

        return 'No one shares this content yet.';
      },
    },

    methods: {
      /**
       * Save response from JSONP or HTTP and emit event
       */
      handleResult(value: R) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore check later
        this.response = value;
        this.$emit('load', value);
      },
      /**
       * Save response from JSONP or HTTP and emit event
       */
      handleError(value: Error | string | null) {
        this.error = value;
        this.$emit('error', value);
      },
      /**
       * Save loading state and emit event
       */
      handleLoading(value: boolean) {
        this.isLoading = value;
        this.$emit('loading', value);
      },
      /**
       * Save counter value and render inside element
       */
      handleCount(count: number | undefined): void {
        this.count = count;
      },
      /**
       * Create new count component
       */
      generateComponent(): VNode {
        const children = this.$slots.default?.({
          isLoading: this.isLoading,
          response: this.response,
          count: this.count,
        }) || [this.count];

        return h(
          this.tag,
          {
            'aria-label': this.ariaLabel,
          },
          children,
        );
      },
    },

    render(): VNode {
      return this.generateComponent();
    },
  });
}
