/**
 * Hey!
 *
 * SHatena component used for Hatena social network
 * @link https://b.hatena.ne.jp/
 */

import { VNode, defineComponent } from 'vue';
import BaseSocial from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 */
export interface ISHatenaShareOptions {
  url: string;
  title?: string;
}

export default /* #__PURE__ */ defineComponent({
  name: 'SHatena',

  mixins: [BaseSocial<ISHatenaShareOptions>(
    'Hatena',
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'http://b.hatena.ne.jp/add';
      const { shareOptions } = this;
      const { url, title } = shareOptions;
      const serialisedParams = getSerialisedParams({
        mode: 'confirm',
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
