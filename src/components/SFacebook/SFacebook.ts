/**
 * Hey!
 *
 * SFacebook component used for Facebook social network
 * @link https://www.facebook.com/
 */

import Vue, {
  CreateElement, VNode, VueConstructor, PropOptions,
} from 'vue';
import BaseSocial from '@/mixins/base-social/BaseSocial';
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

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<typeof BaseSocial>>).extend({
  name: 'SFacebook',

  mixins: [BaseSocial],

  props: {
    shareOptions: {
      type: Object,
      required: true,
    } as PropOptions<ISFacebookShareOptions>,
  },

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
    const { networkURL } = this;

    return h(
      'a',
      {
        attrs: {
          href: networkURL,
          target: '_blank',
          rel: 'nofollow noopener noreferrer',
          'aria-label': 'Share this with Facebook',
        },
        on: {
          click: (event: Event) => {
            event.preventDefault();
            this.openShareDialog(networkURL);
          },
        },
      },
      this.$slots.default,
    );
  },
});
