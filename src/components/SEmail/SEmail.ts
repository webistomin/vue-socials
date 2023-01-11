/**
 * Hey!
 *
 * SEmail component used for sending Email via an HTML link
 * @example mailto:google@gmail.com?subject=Subject&body=Hello%0AWorld&cc=google1%40gmail.com&bcc=google2%40gmail.com
 */

import {
  defineComponent, PropType, VNode, h,
} from 'vue';
import getSerialisedParams from '@/utils/getSerialisedParams';
import getSeparatedList from '@/utils/getSeparatedList';

/**
 * Share parameters for link
 * @link https://tools.ietf.org/html/rfc2368
 * @link https://css-tricks.com/snippets/html/mailto-links/
 * @description cc – carbon copy
 * @description bcc – blind carbon copy
 */
export interface ISEmailShareOptions {
  mail: string;
  subject?: string;
  body?: string;
  cc?: string[];
  bcc?: string[];
}

export default /* #__PURE__ */defineComponent({
  name: 'SEmail',

  props: {
    /**
     * Share parameters for Email
     */
    shareOptions: {
      type: Object as PropType<ISEmailShareOptions>,
      required: true,
    },
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
        cc: getSeparatedList(cc, ', '),
        bcc: getSeparatedList(bcc, ', '),
      });

      return `${BASE_URL}${mail}${serialisedParams}`;
    },

    ariaLabel(): string {
      const { shareOptions } = this;
      const { mail, cc, bcc } = shareOptions;
      const LABELS = [`Send an e-mail to ${mail}`];

      if (cc) {
        LABELS.push(`add a carbon copy for ${getSeparatedList(cc, ', ')}`);
      }

      if (bcc) {
        LABELS.push(`add a blind carbon copy for ${getSeparatedList(bcc, ', ')}`);
      }

      return `${LABELS.join(' and ')}.`;
    },
  },

  render(): VNode {
    return h(
      'a',
      {
        href: this.networkURL,
        rel: 'noopener noreferrer',
        'aria-label': this.ariaLabel,
      },
      this.$slots.default?.(),
    );
  },
});
