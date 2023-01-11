/**
 * Hey!
 *
 * SFlipBoard component used for FlipBoard social network
 * @link https://flipboard.com/
 * @example https://share.flipboard.com/bookmarklet/popout?url=https%3A%2F%2Fgithub.com%2F&title=Title
 */

import { VNode, defineComponent } from 'vue';
import BaseSocial from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 * @link https://about.flipboard.com/social-plugins/?tool=browser
 */
export interface ISFlipBoardShareOptions {
  url: string;
  title?: string;
}

export default /* #__PURE__ */ defineComponent({
  name: 'SFlipBoard',

  mixins: [BaseSocial<ISFlipBoardShareOptions>(
    'Flipboard',
    {
      width: 834,
      height: 572,
    },
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'https://share.flipboard.com/bookmarklet/popout';
      const { shareOptions } = this;
      const { url, title } = shareOptions;
      const serialisedParams = getSerialisedParams({
        v: '2',
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
