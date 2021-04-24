/**
 * Hey!
 *
 * SWeibo component used for Weibo social network
 * @link https://weibo.com/
 */

import { VNode, defineComponent } from 'vue';
import BaseSocial from '@/mixins/BaseSocial/BaseSocial';
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

export default /* #__PURE__ */ defineComponent({
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

  render(): VNode {
    return this.generateComponent(this.networkURL);
  },
});
