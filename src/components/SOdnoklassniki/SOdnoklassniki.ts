/**
 * Hey!
 *
 * SOdnoklassniki component used for Odnoklassniki (English: "Classmates") social network
 * @link https://ok.ru/
 */

import Vue, {
  CreateElement, VNode, VueConstructor,
} from 'vue';
import BaseSocial, { TBaseSocialMixin } from '@/mixins/BaseSocial/BaseSocial';
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

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<TBaseSocialMixin<ISOdnoklassnikiShareOptions>>>).extend({
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

  render(h: CreateElement): VNode {
    return this.generateComponent(h, this.networkURL);
  },
});
