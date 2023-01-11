/**
 * Hey!
 *
 * SSms component used for sending SMS via an HTML link
 */

import {
  defineComponent, h, PropType, VNode,
} from 'vue';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 */
export interface ISSmsShareOptions {
  number: string;
  body?: string;
}

export default /* #__PURE__ */ defineComponent({
  name: 'SSms',

  props: {
    /**
     * Share parameters for SMS
     */
    shareOptions: {
      type: Object as PropType<ISSmsShareOptions>,
      required: true,
    },
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

  render(): VNode {
    return h(
      'a',
      {
        attrs: {
          href: this.networkURL,
        },
      },
      this.$slots.default?.(),
    );
  },
});
