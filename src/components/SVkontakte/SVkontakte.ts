/**
 * Hey!
 *
 * SVkontakte component used for Vkontakte social network
 * @link https://vk.com
 */

import Vue, {
  CreateElement, VNode, VueConstructor, PropOptions,
} from 'vue';
import BaseSocial from '@/mixins/base-social/BaseSocial';
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

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<typeof BaseSocial>>).extend({
  name: 'SVkontakte',

  mixins: [BaseSocial],

  props: {
    shareOptions: {
      type: Object,
      default: () => ({}),
    } as PropOptions<ISVkontakteShareOptions>,
  },

  computed: {
    networkURL(): string {
      const BASE_URL = 'https://vk.com/share.php';
      const { shareOptions } = this;
      const {
        url, title, image, noParse, noVkLinks,
      } = shareOptions;

      return `${BASE_URL}${getSerialisedParams({
        url,
        title,
        image,
        noparse: noParse,
        no_vk_links: Number(noVkLinks),
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
          'aria-label': 'Share this with Vkontakte',
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
