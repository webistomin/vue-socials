/**
 * Hey!
 *
 * Base count mixin used for every social count component.
 */

import { ExtendedVue } from 'vue/types/vue';
import Vue, { CreateElement, PropOptions, VNode } from 'vue';
import { isUndefined } from '@/utils/inspect';

export type TBaseCountMixin<T> = ExtendedVue<Vue,
{
  count: number | undefined
},
{
  generateComponent(h: CreateElement): VNode;
  handleResult<V>(value: V): void;
  saveCount(count: (number | undefined)): void;
},
unknown,
{
  shareOptions: T
}
>;

export default function BaseCount<T>(): TBaseCountMixin<T> {
  return /* #__PURE__ */Vue.extend({
    /**
     * Share parameters for social network
     */
    props: {
      shareOptions: {
        type: Object,
        required: true,
      } as PropOptions<T>,
    },

    data() : {
      count: number | undefined,
    } {
      return {
        count: undefined,
      };
    },

    methods: {
      /**
       * Emit response from JSONP
       */
      handleResult<V>(value: V) {
        this.$emit('load', value);
      },
      /**
       * Save counter value and render inside element
       */
      saveCount(count: number | undefined): void {
        this.count = count;
      },
      /**
       * Create new count component
       */
      generateComponent(h: CreateElement): VNode {
        return h(
          'span',
          {},
          isUndefined(this.count) ? undefined : String(this.count),
        );
      },
    },

    render(h: CreateElement): VNode {
      return this.generateComponent(h);
    },
  });
}
