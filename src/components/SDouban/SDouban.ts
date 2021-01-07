/**
* Hey!
*
* SDouban component used for Douban social network
* @link https://www.douban.com
*/

import Vue, {
  CreateElement, VNode, VueConstructor,
} from 'vue';
import BaseSocial, { TBaseSocialMixin } from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
* Share parameters for link
*/
export interface ISDoubanShareOptions {
  title?: string;
  text?: string;
  url: string;
}

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<TBaseSocialMixin<ISDoubanShareOptions>>>).extend({
  name: 'SDouban',

  mixins: [BaseSocial<ISDoubanShareOptions>()],

  computed: {
    networkURL(): string {
      const BASE_URL = 'http://www.douban.com/recommend/';
      const { shareOptions } = this;
      const { title, text, url } = shareOptions;
      const serialisedParams = getSerialisedParams({
        name: title,
        text,
        comment: url,
        href: url,
      });

      return `${BASE_URL}${serialisedParams}`;
    },
  },

  render(h: CreateElement): VNode {
    return this.generateComponent(h, this.networkURL, 'Douban');
  },
});
