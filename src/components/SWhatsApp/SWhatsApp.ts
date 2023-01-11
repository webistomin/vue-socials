/**
 * Hey!
 *
 * SWhatsApp component used for WhatsApp social network
 * @link https://whatsapp.com
 */

import { VNode, defineComponent } from 'vue';
import BaseSocial from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 * @link https://faq.whatsapp.com/general/chats/how-to-use-click-to-chat
 */
export interface ISWhatsAppShareOptions {
  number: string;
  text?: string;
}

export default /* #__PURE__ */ defineComponent({
  name: 'SWhatsApp',

  mixins: [BaseSocial<ISWhatsAppShareOptions>(
    'WhatsApp',
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'https://api.whatsapp.com/send';
      const { shareOptions } = this;
      const { number, text } = shareOptions;
      const serialisedParams = getSerialisedParams({
        phone: number,
        text,
      });

      return `${BASE_URL}${serialisedParams}`;
    },
  },

  render(): VNode {
    return this.generateComponent(this.networkURL);
  },
});
