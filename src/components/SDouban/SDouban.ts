/**
 * Hey!
 *
 * SDouban component used for Douban social network
 * @link https://www.douban.com
 * @example https://accounts.douban.com/passport/login?redir=https%3A//www.douban.com/share/service%3Fname%3D%26href%3D%26image%3D%26updated%3D%26bm%3D%26name%3DTitle%26text%3DText%26comment%3Dhttps%253A%252F%252Fgithub.com%252F%26href%3Dhttps%253A%252F%252Fgithub.com%252F
 */

import { VNode, defineComponent } from 'vue';
import BaseSocial from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 * @link https://blog.duncanworthy.me/misc/how-to-add-chinese-social-media-sharing-links-on-wordpress/comment-page-1/
 */
export interface ISDoubanShareOptions {
  title?: string;
  url?: string;
}

export default /* #__PURE__ */ defineComponent({
  name: 'SDouban',

  mixins: [BaseSocial<ISDoubanShareOptions>(
    'Douban',
    {
      width: 1100,
      height: 450,
    },
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'http://www.douban.com/recommend/';
      const { shareOptions } = this;
      const { title, url } = shareOptions;
      const serialisedParams = getSerialisedParams({
        url,
        title,
      });

      return `${BASE_URL}${serialisedParams}`;
    },
  },

  render(): VNode {
    return this.generateComponent(this.networkURL);
  },
});
