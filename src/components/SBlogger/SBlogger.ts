/**
* Hey!
*
* SBlogger component used for Blogger social network
* @link https://www.blogger.com/
*/

import Vue, {
  CreateElement, VNode, VueConstructor,
} from 'vue';
import BaseSocial, { TBaseSocialMixin } from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
* Share parameters for link
*/
export interface ISBloggerShareOptions {
  url: string;
  title?: string;
  text?: string;
}

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<TBaseSocialMixin<ISBloggerShareOptions>>>).extend({
  name: 'SBlogger',

  mixins: [BaseSocial<ISBloggerShareOptions>()],

  computed: {
    networkURL(): string {
      const BASE_URL = 'https://www.blogger.com/blog-this.g';
      const { shareOptions } = this;
      const { url, title, text } = shareOptions;
      const serialisedParams = getSerialisedParams({
        u: url,
        t: text,
        n: title,
      });

      return `${BASE_URL}${serialisedParams}`;
    },
  },

  render(h: CreateElement): VNode {
    return this.generateComponent(h, this.networkURL, 'Blogger');
  },
});
