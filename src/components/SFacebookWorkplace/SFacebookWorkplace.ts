/**
 * Hey!
 *
 * SFacebookWorkplace component used for FacebookWorkplace social network
 * @link https://work.facebook.com/
 * @example https://work.facebook.com/sharer.php?url=https%253A%252F%252Fgithub.com
 */

import { VNode, defineComponent } from 'vue';
import BaseSocial from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 * @link https://developers.facebook.com/docs/workplace/sharing/share-dialog/
 */
export interface ISFacebookWorkplaceShareOptions {
  url: string;
}

export default /* #__PURE__ */ defineComponent({
  name: 'SFacebookWorkplace',

  mixins: [BaseSocial<ISFacebookWorkplaceShareOptions>(
    'Facebook Workplace',
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'https://work.facebook.com/sharer.php';
      const { shareOptions } = this;
      const { url } = shareOptions;
      const serialisedParams = getSerialisedParams({
        url,
      });

      return `${BASE_URL}${serialisedParams}`;
    },
  },

  render(): VNode {
    return this.generateComponent(this.networkURL);
  },
});
