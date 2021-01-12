/**
 * Hey!
 *
 * SWeibo component used for Weibo social network
 * @link https://weibo.com/
 */

import Vue, {
  CreateElement, VNode, VueConstructor,
} from 'vue';
import BaseSocial, { TBaseSocialMixin } from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 * @link http://open.weibo.com/wiki/ShareCode
 */
export interface ISWeiboShareOptions {
  url: string;
  title?: string;
  appkey: string;
  pic?: string;
}

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<TBaseSocialMixin<ISWeiboShareOptions>>>).extend({
  name: 'SWeibo',

  mixins: [BaseSocial<ISWeiboShareOptions>(
    'Weibo',
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'http://service.weibo.com/share/share.php';
      const { shareOptions } = this;
      const {
        url, title, appkey, pic,
      } = shareOptions;
      const serialisedParams = getSerialisedParams({
        url,
        title,
        appkey,
        pic,
      });

      return `${BASE_URL}${serialisedParams}`;
    },
  },

  render(h: CreateElement): VNode {
    return this.generateComponent(h, this.networkURL);
  },
});
