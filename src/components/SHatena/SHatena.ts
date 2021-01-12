/**
 * Hey!
 *
 * SHatena component used for Hatena social network
 * @link https://b.hatena.ne.jp/
 */

import Vue, {
  CreateElement, VNode, VueConstructor,
} from 'vue';
import BaseSocial, { TBaseSocialMixin } from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 */
export interface ISHatenaShareOptions {
  url: string;
  title?: string;
}

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<TBaseSocialMixin<ISHatenaShareOptions>>>).extend({
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

  render(h: CreateElement): VNode {
    return this.generateComponent(h, this.networkURL);
  },
});
