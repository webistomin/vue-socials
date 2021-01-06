/**
 * Hey!
 *
 * SEmail component used for sending Email via an HTML link
 */

import Vue, { CreateElement, PropOptions, VNode } from 'vue';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 */
export interface ISEmailShareOptions {
  mail: string;
  subject?: string;
  body?: string;
  cc?: string;
  bcc?: string;
}

export default /* #__PURE__ */Vue.extend({
  name: 'SEmail',

  props: {
    /**
     * Share parameters for Email
     */
    shareOptions: {
      type: Object,
      required: true,
    } as PropOptions<ISEmailShareOptions>,
  },

  computed: {
    networkURL(): string {
      const BASE_URL = 'mailto:';
      const { shareOptions } = this;
      const {
        mail, subject, body, cc, bcc,
      } = shareOptions;
      const serialisedParams = getSerialisedParams({
        subject,
        body,
        cc,
        bcc,
      });

      return `${BASE_URL}${mail}${serialisedParams}`;
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
