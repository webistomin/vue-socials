/**
 * Hey!
 *
 * STelegram component used for Telegram social network
 * @link https://telegram.org/
 */

import { VNode, defineComponent } from 'vue';
import BaseSocial from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 * @link https://core.telegram.org/widgets/share#custom-buttons
 */
export interface ISTelegramShareOptions {
  url?: string;
  text?: string;
}

export default /* #__PURE__ */ defineComponent({
  name: 'STelegram',

  mixins: [BaseSocial<ISTelegramShareOptions>(
    'Telegram',
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'https://t.me/share/url';
      const { shareOptions } = this;
      const { url, text } = shareOptions;

      const serialisedParams = getSerialisedParams({
        url,
        text,
      });

      return `${BASE_URL}${serialisedParams}`;
    },
  },

  render(): VNode {
    return this.generateComponent(this.networkURL);
  },
});
