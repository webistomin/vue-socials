/**
 * Hey!
 *
 * SKakaoStory component used for Kakao social network
 * @link https://story.kakao.com/
 */

import { VNode, defineComponent } from 'vue';
import BaseSocial from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 * @link https://developers.kakao.com/sdk/js/kakao.js
 */
export interface ISKakaoStoryShareOptions {
  url: string;
  text?: string;
}

export default /* #__PURE__ */ defineComponent({
  name: 'SKakaoStory',

  mixins: [BaseSocial<ISKakaoStoryShareOptions>(
    'KakaoStory',
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'https://story.kakao.com/s/share';
      const { shareOptions } = this;
      const { url, text } = shareOptions;

      const serialisedParams = getSerialisedParams({
        url,
        text,
      });

      return `${BASE_URL}${serialisedParams}`;
    },
  },

  render(): VNode {
    return this.generateComponent(this.networkURL);
  },
});
