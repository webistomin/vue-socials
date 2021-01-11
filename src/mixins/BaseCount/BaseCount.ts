/**
 * Hey!
 *
 * Base count mixin used for every social count component.
 */

import { ExtendedVue } from 'vue/types/vue';
import Vue, {
  Component, CreateElement, PropOptions, VNode,
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

export type TBaseCountMixin<T, R> = ExtendedVue<Vue,
TBaseCountDataOptions<R>,
{
  generateComponent(h: CreateElement): VNode;
  handleResult(value: R): void;
  handleError(value: Error | string | null): void;
  handleLoading(value: boolean): void;
  handleCount(count: (number | undefined)): void;
},
unknown,
TBaseCountPropsOptions<T>
>;

/**
 * Wrapper around Vue mixin to pass parameters inside.
 * We use multiple parameters instead of a single object because
 * it causes problems with tree-shaking. I don't know why.
 * A little bit inconvenient, but overall OK :)
 */
export default function BaseCount<T, R>(
  name: string,
  customShareOptions?: T,
  isShareOptionsRequired?: boolean,
  customAriaLabel?: string,
): TBaseCountMixin<T, R> {
  return /* #__PURE__ */Vue.extend({
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
        default: () => customShareOptions || {} as T,
        required: isShareOptionsRequired || true,
      } as PropOptions<T>,
    },

    data(): TBaseCountDataOptions<R> {
      return {
        count: undefined,
        response: null,
        error: null,
        isLoading: false,
      };
    },

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
      generateComponent(h: CreateElement): VNode {
        const children = this.$scopedSlots.default || ((props) => [props.count]);

        return h(
          this.tag,
          {
            attrs: {
              'aria-label': this.ariaLabel,
            },
            on: this.$listeners,
          },
          children({
            isLoading: this.isLoading,
            response: this.response,
            count: this.count,
          }),
        );
      },
    },

    render(h: CreateElement): VNode {
      return this.generateComponent(h);
    },
  });
}
