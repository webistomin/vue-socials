/**
 * Hey!
 *
 * SRenRen component used for RenRen social network
 * @link https://renren.com
 */

import { VNode, defineComponent } from 'vue';
import BaseSocial from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 * @link http://dev.renren.com/website/?widget=rrshare&content=use
 */
export interface ISRenRenShareOptions {
  resourceUrl: string;
  srcUrl: string;
  title?: string;
  description?: string;
  pic?: string;
}

export default /* #__PURE__ */ defineComponent({
  name: 'SRenRen',

  mixins: [BaseSocial<ISRenRenShareOptions>(
    'RenRen',
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'http://widget.renren.com/dialog/share';
      const { shareOptions } = this;
      const {
        resourceUrl, srcUrl, title, description, pic,
      } = shareOptions;
      const serialisedParams = getSerialisedParams({
        resourceUrl,
        srcUrl,
        title,
        description,
        pic,
      });

      return `${BASE_URL}${serialisedParams}`;
    },
  },

  render(): VNode {
    return this.generateComponent(this.networkURL);
  },
});
