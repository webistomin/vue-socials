/**
 * Hey!
 *
 * STumblr component used for Tumblr social network
 * @link https://tumblr.com/
 */

import { VNode, defineComponent } from 'vue';
import BaseSocial from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';
import getSeparatedList from '@/utils/getSeparatedList';

/**
 * Share parameters for link
 * @link https://www.tumblr.com/docs/en/share_button
 */
export interface ISTumblrShareOptions {
  canonicalUrl: string;
  title?: string;
  caption?: string;
  tags?: string[];
  content?: string;
  showVia?: string;
}

export default /* #__PURE__ */ defineComponent({
  name: 'STumblr',

  mixins: [BaseSocial<ISTumblrShareOptions>(
    'Tumblr',
    {
      width: 542,
      height: 644,
    },
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'https://www.tumblr.com/widgets/share/tool';
      const { shareOptions } = this;
      const {
        canonicalUrl, tags, title, caption, content, showVia,
      } = shareOptions;
      const serialisedParams = getSerialisedParams({
        canonicalUrl,
        title,
        caption,
        content,
        tags: getSeparatedList(tags),
        'show-via': showVia,
      });

      return `${BASE_URL}${serialisedParams}`;
    },
  },

  render(): VNode {
    return this.generateComponent(this.networkURL);
  },
});
