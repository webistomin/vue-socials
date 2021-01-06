/**
* Hey!
*
* SFlipBoard component used for FlipBoard social network
* @link https://flipboard.com/
*/

import Vue, {
  CreateElement, VNode, VueConstructor,
} from 'vue';
import BaseSocial, { TBaseSocialMixin } from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
* Share parameters for link
* @link https://about.flipboard.com/social-plugins/?tool=browser
*/
export interface ISFlipBoardShareOptions {
  url: string;
  title?: string;
}

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<TBaseSocialMixin<ISFlipBoardShareOptions>>>).extend({
  name: 'SFlipBoard',

  mixins: [BaseSocial<ISFlipBoardShareOptions>()],

  computed: {
    networkURL(): string {
      const BASE_URL = 'https://share.flipboard.com/bookmarklet/popout';
      const { shareOptions } = this;
      const { url, title } = shareOptions;
      const serialisedParams = getSerialisedParams({
        url,
        title,
      });

      return `${BASE_URL}${serialisedParams}`;
    },
  },

  render(h: CreateElement): VNode {
    return this.generateComponent(h, this.networkURL, 'FlipBoard');
  },
});
