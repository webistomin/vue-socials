/**
 * Hey!
 *
 * SKakaoStory component used for Kakao social network
 * @link https://story.kakao.com/
 */

import Vue, {
  CreateElement, VNode, VueConstructor,
} from 'vue';
import BaseSocial, { TBaseSocialMixin } from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 * @link https://developers.kakao.com/sdk/js/kakao.js
 */
export interface ISKakaoStoryShareOptions {
  url: string;
  text?: string;
}

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<TBaseSocialMixin<ISKakaoStoryShareOptions>>>).extend({
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

  render(h: CreateElement): VNode {
    return this.generateComponent(h, this.networkURL);
  },
});
