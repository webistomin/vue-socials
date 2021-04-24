/**
 * Hey!
 *
 * SSkype component used for Skype social network
 * @link https://web.skype.com/
 */

import { VNode, defineComponent } from 'vue';
import BaseSocial from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 */
export interface ISSkypeShareOptions {
  url: string;
  text?: string;
}

export default /* #__PURE__ */ defineComponent({
  name: 'SSkype',

  mixins: [BaseSocial<ISSkypeShareOptions>(
    'Skype',
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'https://web.skype.com/share';
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
