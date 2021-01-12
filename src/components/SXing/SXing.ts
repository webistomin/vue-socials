/**
 * Hey!
 *
 * SXing component used for Xing social network
 * @link https://xing.com/
 */

import Vue, {
  CreateElement, VNode, VueConstructor,
} from 'vue';
import BaseSocial, { TBaseSocialMixin } from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 * @link https://dev.xing.com/plugins/share_button/docs
 */
export interface ISXingShareOptions {
  url: string;
  followUrl?: string;
}

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<TBaseSocialMixin<ISXingShareOptions>>>).extend({
  name: 'SXing',

  mixins: [BaseSocial<ISXingShareOptions>(
    'Xing',
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'https://www.xing.com/spi/shares/new';
      const { shareOptions } = this;
      const { url, followUrl } = shareOptions;
      const serialisedParams = getSerialisedParams({
        url,
        follow_url: followUrl,
      });

      return `${BASE_URL}${serialisedParams}`;
    },
  },

  render(h: CreateElement): VNode {
    return this.generateComponent(h, this.networkURL);
  },
});
