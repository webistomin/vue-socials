/**
 * Hey!
 *
 * SSms component used sending SMS via an HTML link
 */

import Vue, { CreateElement, PropOptions, VNode } from 'vue';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 * @link https://apiok.ru/en/ext/like
 */
export interface ISSmsShareOptions {
  number: string;
  body?: string;
}

export default /* #__PURE__ */Vue.extend({
  name: 'SSms',

  props: {
    /**
     * Share parameters for SMS
     */
    shareOptions: {
      type: Object,
      required: true,
    } as PropOptions<ISSmsShareOptions>,
  },

  computed: {
    networkURL(): string {
      const BASE_URL = 'sms:';
      const { shareOptions } = this;
      const { number, body } = shareOptions;
      const serialisedParams = getSerialisedParams({
        body,
      });

      return `${BASE_URL}${number}${serialisedParams}`;
    },
  },

  render(h: CreateElement): VNode {
    return h(
      'a',
      {
        attrs: {
          href: this.networkURL,
        },
      },
      this.$slots.default,
    );
  },
});
