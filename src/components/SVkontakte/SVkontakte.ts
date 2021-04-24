/**
 * Hey!
 *
 * SVkontakte component used for Vkontakte social network
 * @link https://vk.com
 */

import { VNode, defineComponent } from 'vue';
import BaseSocial from '@/mixins/BaseSocial/BaseSocial';
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

export default /* #__PURE__ */ defineComponent({
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

  render(): VNode {
    return this.generateComponent(this.networkURL);
  },
});
