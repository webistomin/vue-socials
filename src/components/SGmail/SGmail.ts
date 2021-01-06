/**
 * Hey!
 *
 * SGmail component used for sending Email via GMail
 */

import Vue, { CreateElement, PropOptions, VNode } from 'vue';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 */
export interface ISGmailShareOptions {
  to: string;
  su?: string;
  subject?: string;
  body?: string;
  cc?: string;
  bcc?: string;
}

export default /* #__PURE__ */Vue.extend({
  name: 'SGmail',

  props: {
    /**
     * Share parameters for Email
     */
    shareOptions: {
      type: Object,
      required: true,
    } as PropOptions<ISGmailShareOptions>,
  },

  computed: {
    networkURL(): string {
      const BASE_URL = 'https://mail.google.com/mail/';
      const { shareOptions } = this;
      const {
        to, su, subject, body, cc, bcc,
      } = shareOptions;
      const serialisedParams = getSerialisedParams({
        view: 'cm',
        to,
        su,
        subject,
        body,
        cc,
        bcc,
      });

      return `${BASE_URL}${serialisedParams}`;
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
