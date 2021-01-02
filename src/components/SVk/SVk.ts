import Vue, {
  CreateElement, VNode, VueConstructor, PropOptions,
} from 'vue';
import BaseSocial from '@/mixins/base-social/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * @link https://vk.com/dev/widget_share
 */
export interface ISVkShareOptions {
  url?: string;
  title?: string;
  image?: string;
  noParse?: boolean;
  noVkLinks?: boolean;
}

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<typeof BaseSocial>>).extend({
  name: 'SVk',

  mixins: [BaseSocial],

  props: {
    shareOptions: {
      type: Object,
      default: () => ({}),
    } as PropOptions<ISVkShareOptions>,
  },

  data() {
    return {
      network: 'Vkontakte',
    };
  },

  computed: {
    networkURL(): string {
      const { shareOptions } = this;
      const {
        url, title, image, noParse, noVkLinks,
      } = shareOptions;
      const BASE_URL = 'https://vk.com/share.php';

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
    const { networkURL, network } = this;

    return h(
      'a',
      {
        class: [
          'vue-social',
          network && `vue-social--${network.toLowerCase()}`,
        ],
        attrs: {
          href: networkURL,
          target: '_blank',
          rel: 'nofollow noopener noreferrer',
          'aria-label': `Share this on ${network}`,
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
