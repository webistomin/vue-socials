/**
 * Hey!
 *
 * Base count mixin used for every social count component.
 */

import { ExtendedVue } from 'vue/types/vue';
import Vue, { CreateElement, PropOptions, VNode } from 'vue';

export type TBaseCountMixin<T> = ExtendedVue<Vue,
{
  count: number | undefined
},
{
  generateComponent(h: CreateElement): VNode;
  saveCount(count: (number | undefined)): void
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
          this.count === undefined ? undefined : String(this.count),
        );
      },
    },

    render(h: CreateElement): VNode {
      return this.generateComponent(h);
    },
  });
}
