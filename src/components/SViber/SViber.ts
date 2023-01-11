/**
 * Hey!
 *
 * SViber component used for Viber social network
 * @link https://www.viber.com/
 */

import { VNode, defineComponent } from 'vue';
import BaseSocial from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 * @link https://developers.viber.com/docs/tools/share-button/
 */
export interface ISViberShareOptions {
  url: string;
  text: string;
}

export default /* #__PURE__ */ defineComponent({
  name: 'SViber',

  mixins: [BaseSocial<ISViberShareOptions>(
    'Viber',
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'viber://forward';
      const { shareOptions } = this;
      const { text, url } = shareOptions;
      const serialisedParams = getSerialisedParams({
        text: `${text} ${url}`,
      });

      return `${BASE_URL}${serialisedParams}`;
    },
  },

  render(): VNode {
    return this.generateComponent(this.networkURL);
  },
});
