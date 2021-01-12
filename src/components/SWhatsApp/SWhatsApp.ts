/**
 * Hey!
 *
 * SWhatsApp component used for WhatsApp social network
 * @link https://whatsapp.com
 */

import Vue, {
  CreateElement, VNode, VueConstructor,
} from 'vue';
import BaseSocial, { TBaseSocialMixin } from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 * @link https://faq.whatsapp.com/general/chats/how-to-use-click-to-chat
 */
export interface ISWhatsAppShareOptions {
  number: string;
  text?: string;
}

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<TBaseSocialMixin<ISWhatsAppShareOptions>>>).extend({
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

  render(h: CreateElement): VNode {
    return this.generateComponent(h, this.networkURL);
  },
});
