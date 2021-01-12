/**
 * Hey!
 *
 * SWordPress component used for WordPress social network
 * @link https://wordpress.org/
 */

import Vue, {
  CreateElement, VNode, VueConstructor,
} from 'vue';
import BaseSocial, { TBaseSocialMixin } from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 * @link https://codex.wordpress.org/Press_This
 */
export interface ISWordPressShareOptions {
  domain: string;
  url: string;
  title?: string;
  text?: string;
  image?: string;
}

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<TBaseSocialMixin<ISWordPressShareOptions>>>).extend({
  name: 'SWordPress',

  mixins: [BaseSocial<ISWordPressShareOptions>(
    'WordPress',
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'wp-admin/press-this.php';
      const { shareOptions } = this;
      const {
        domain, url, title, text, image,
      } = shareOptions;
      const serialisedParams = getSerialisedParams({
        u: url,
        t: title,
        s: text,
        i: image,
      });

      return `${domain}/${BASE_URL}${serialisedParams}`;
    },
  },

  render(h: CreateElement): VNode {
    return this.generateComponent(h, this.networkURL);
  },
});
