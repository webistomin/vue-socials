/**
 * Hey!
 *
 * SOdnoklassniki component used for Odnoklassniki (English: "Classmates") social network
 * @link https://ok.ru/
 */

import { VNode, defineComponent } from 'vue';
import BaseSocial from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 * @link https://apiok.ru/en/ext/like
 */
export interface ISOdnoklassnikiShareOptions {
  url: string;
  title?: string;
  imageUrl?: string;
}

export default /* #__PURE__ */ defineComponent({
  name: 'SOdnoklassniki',

  mixins: [BaseSocial<ISOdnoklassnikiShareOptions>(
    'Odnoklassniki',
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'https://connect.ok.ru/offer';
      const { shareOptions } = this;
      const { url, title, imageUrl } = shareOptions;

      const serialisedParams = getSerialisedParams({
        url,
        title,
        imageUrl,
      });

      return `${BASE_URL}${serialisedParams}`;
    },
  },

  render(): VNode {
    return this.generateComponent(this.networkURL);
  },
});
