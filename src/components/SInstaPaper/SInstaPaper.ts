/**
 * Hey!
 *
 * SInstaPaper component used for InstaPaper  social network
 * @link http://www.instapaper.com/
 */

import { VNode, defineComponent } from 'vue';
import BaseSocial from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 */
export interface ISInstaPaperShareOptions {
  url: string;
  title?: string;
  description?: string;
}

export default /* #__PURE__ */ defineComponent({
  name: 'SInstaPaper',

  mixins: [BaseSocial<ISInstaPaperShareOptions>(
    'InstaPaper',
    {
      width: 600,
      height: 600,
    },
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'http://www.instapaper.com/edit';
      const { shareOptions } = this;
      const { url, title, description } = shareOptions;

      const serialisedParams = getSerialisedParams({
        url,
        title,
        description,
      });

      return `${BASE_URL}${serialisedParams}`;
    },
  },

  render(): VNode {
    return this.generateComponent(this.networkURL);
  },
});
