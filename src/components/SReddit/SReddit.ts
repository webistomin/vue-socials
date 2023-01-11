/**
 * Hey!
 *
 * SReddit component used for Reddit social network
 * @link https://www.reddit.com/
 */

import { VNode, defineComponent } from 'vue';
import BaseSocial from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 */
export interface ISRedditShareOptions {
  url?: string;
  title?: string;
  text?: string;
  selftext?: boolean;
}

export default /* #__PURE__ */ defineComponent({
  name: 'SReddit',

  mixins: [BaseSocial<ISRedditShareOptions>(
    'Reddit',
    undefined,
    undefined,
    undefined,
    false,
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'https://reddit.com/submit';
      const { shareOptions } = this;
      const {
        url, title, text, selftext,
      } = shareOptions;

      const serialisedParams = getSerialisedParams({
        url,
        title,
        text,
        selftext,
      });

      return `${BASE_URL}${serialisedParams}`;
    },
  },

  render(): VNode {
    return this.generateComponent(this.networkURL);
  },
});
