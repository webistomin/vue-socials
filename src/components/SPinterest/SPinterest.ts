/**
 * Hey!
 *
 * SPinterest component used for Pinterest social network
 * @link https://www.pinterest.com/
 */

import { VNode, defineComponent } from 'vue';
import BaseSocial from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 * @link https://developers.pinterest.com/docs/widgets/save/?
 */
export interface ISPinterestShareOptions {
  url: string;
  media: string;
  description?: string;
}

export default /* #__PURE__ */ defineComponent({
  name: 'SPinterest',

  mixins: [BaseSocial<ISPinterestShareOptions>(
    'Pinterest',
    {
      width: 700,
      height: 700,
    },
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'http://pinterest.com/pin/create/button/';
      const { shareOptions } = this;
      const { url, media, description } = shareOptions;

      const serialisedParams = getSerialisedParams({
        url,
        media,
        description,
      });

      return `${BASE_URL}${serialisedParams}`;
    },
  },

  render(): VNode {
    return this.generateComponent(this.networkURL);
  },
});
