/**
 * Hey!
 *
 * STwitter component used for Twitter social network
 * @link https://twitter.com/
 */

import { VNode, defineComponent } from 'vue';
import BaseSocial from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';
import getSeparatedList from '@/utils/getSeparatedList';

/**
 * Share parameters for link
 * @link https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview
 */
export interface ISTwitterShareOptions {
  text?: string;
  url?: string;
  hashtags?: string[];
  via?: string;
}

export default /* #__PURE__ */ defineComponent({
  name: 'STwitter',

  mixins: [BaseSocial<ISTwitterShareOptions>(
    'Twitter',
    undefined,
    undefined,
    undefined,
    false,
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'https://twitter.com/intent/tweet';
      const { shareOptions } = this;
      const {
        text, url, hashtags, via,
      } = shareOptions;
      const serialisedParams = getSerialisedParams({
        text,
        url,
        hashtags: getSeparatedList(hashtags),
        via,
      });

      return `${BASE_URL}${serialisedParams}`;
    },
  },

  render(): VNode {
    return this.generateComponent(this.networkURL);
  },
});
