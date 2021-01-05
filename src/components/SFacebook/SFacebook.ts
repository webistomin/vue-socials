/**
 * Hey!
 *
 * SFacebook component used for Facebook social network
 * @link https://www.facebook.com/
 */

import Vue, {
  CreateElement, VNode, VueConstructor,
} from 'vue';
import BaseSocial, { IBaseSocialMixin } from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 * @link https://developers.facebook.com/docs/workplace/sharing/share-dialog/
 */
export interface ISFacebookShareOptions {
  url: string;
  quote?: string;
  hashtag?: string;
}

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<IBaseSocialMixin<ISFacebookShareOptions>>>).extend({
  name: 'SFacebook',

  mixins: [BaseSocial<ISFacebookShareOptions>()],

  computed: {
    networkURL(): string {
      const BASE_URL = 'https://www.facebook.com/sharer/sharer.php';
      const { shareOptions } = this;
      const {
        url, quote, hashtag,
      } = shareOptions;

      return `${BASE_URL}${getSerialisedParams({
        u: url,
        quote,
        hashtag,
      })}`;
    },
  },

  render(h: CreateElement): VNode {
    return this.generateComponent(h, this.networkURL, 'facebook');
  },
});
