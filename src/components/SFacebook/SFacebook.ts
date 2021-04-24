/**
 * Hey!
 *
 * SFacebook component used for Facebook social network.
 * @link https://www.facebook.com/
 * @example https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgithub.com%2F&quote=Quote&hashtag=%23Github
 */

import { VNode, defineComponent } from 'vue';
import BaseSocial from '@/mixins/BaseSocial/BaseSocial';
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

export default /* #__PURE__ */ defineComponent({
  name: 'SFacebook',

  mixins: [BaseSocial<ISFacebookShareOptions>(
    'Facebook',
    {
      width: 685,
      height: 600,
    },
  )],

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

  render(): VNode {
    return this.generateComponent(this.networkURL);
  },
});
