/**
 * Hey!
 *
 * SXing component used for Xing social network
 * @link https://xing.com/
 */

import { VNode, defineComponent } from 'vue';
import BaseSocial from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 * @link https://dev.xing.com/plugins/share_button/docs
 */
export interface ISXingShareOptions {
  url: string;
  followUrl?: string;
}

export default /* #__PURE__ */ defineComponent({
  name: 'SXing',

  mixins: [BaseSocial<ISXingShareOptions>(
    'Xing',
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'https://www.xing.com/spi/shares/new';
      const { shareOptions } = this;
      const { url, followUrl } = shareOptions;
      const serialisedParams = getSerialisedParams({
        url,
        follow_url: followUrl,
      });

      return `${BASE_URL}${serialisedParams}`;
    },
  },

  render(): VNode {
    return this.generateComponent(this.networkURL);
  },
});
