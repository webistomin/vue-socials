/**
 * Hey!
 *
 * SThreema component used for Threema social network
 * @link https://threema.ch/en
 */

import { VNode, defineComponent } from 'vue';
import BaseSocial from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 */
export interface ISThreemaShareOptions {
  url: string;
  id?: string;
}

export default /* #__PURE__ */ defineComponent({
  name: 'SThreema',

  mixins: [BaseSocial<ISThreemaShareOptions>(
    'Threema',
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'threema://compose';
      const { shareOptions } = this;
      const { url, id } = shareOptions;
      const serialisedParams = getSerialisedParams({
        text: url,
        id,
      });

      return `${BASE_URL}${serialisedParams}`;
    },
  },

  render(): VNode {
    return this.generateComponent(this.networkURL);
  },
});
