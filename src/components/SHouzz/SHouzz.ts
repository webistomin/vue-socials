/**
 * Hey!
 *
 * SHouzz component used for Houzz social network
 * @link https://www.houzz.com/
 */

import Vue, {
  CreateElement, VNode, VueConstructor,
} from 'vue';
import BaseSocial, { TBaseSocialMixin } from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';
import getSeparatedList from '@/utils/getSeparatedList';

/**
 * Share parameters for link
 * @link https://www.houzz.com/buttonsAndBadges/button#houzzbuttondocs
 */
export interface ISHouzzShareOptions {
  id: string;
  url: string;
  title?: string;
  image?: string;
  category?: string[];
}

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<TBaseSocialMixin<ISHouzzShareOptions>>>).extend({
  name: 'SHouzz',

  mixins: [BaseSocial<ISHouzzShareOptions>(
    'Houzz',
    {
      width: 1100,
      height: 700,
    },
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'https://www.houzz.com/imageClipperUpload';
      const { shareOptions } = this;
      const {
        id, url, title, image, category,
      } = shareOptions;

      const serialisedParams = getSerialisedParams({
        link: url,
        hzid: id,
        imageUrl: image,
        title,
        category: getSeparatedList(category),
      });

      return `${BASE_URL}${serialisedParams}`;
    },
  },

  render(h: CreateElement): VNode {
    return this.generateComponent(h, this.networkURL);
  },
});
