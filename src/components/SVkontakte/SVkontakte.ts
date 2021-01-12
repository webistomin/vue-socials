/**
 * Hey!
 *
 * SVkontakte component used for Vkontakte social network
 * @link https://vk.com
 */

import Vue, {
  CreateElement, VNode, VueConstructor,
} from 'vue';
import BaseSocial, { TBaseSocialMixin } from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 * @link https://vk.com/dev/widget_share
 */
export interface ISVkontakteShareOptions {
  url?: string;
  title?: string;
  image?: string;
  noParse?: boolean;
  noVkLinks?: boolean;
}

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<TBaseSocialMixin<ISVkontakteShareOptions>>>).extend({
  name: 'SVkontakte',

  mixins: [BaseSocial<ISVkontakteShareOptions>(
    'Vkontakte',
    undefined,
    undefined,
    undefined,
    false,
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'https://vk.com/share.php';
      const { shareOptions } = this;
      const {
        url, title, image, noParse, noVkLinks,
      } = shareOptions;

      const serialisedParams = getSerialisedParams({
        url,
        title,
        image,
        noparse: noParse,
        no_vk_links: Number(noVkLinks),
      });

      return `${BASE_URL}${serialisedParams}`;
    },
  },

  render(h: CreateElement): VNode {
    return this.generateComponent(h, this.networkURL);
  },
});
