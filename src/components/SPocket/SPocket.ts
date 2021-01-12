/**
 * Hey!
 *
 * SPocket component used for Pocket social network
 * @link https://getpocket.com/
 */

import Vue, {
  CreateElement, VNode, VueConstructor,
} from 'vue';
import BaseSocial, { TBaseSocialMixin } from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 * @link https://getpocket.com/publisher/button_docs
 */
export interface ISPocketShareOptions {
  url: string;
}

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<TBaseSocialMixin<ISPocketShareOptions>>>).extend({
  name: 'SPocket',

  mixins: [BaseSocial<ISPocketShareOptions>(
    'GetPocket',
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'https://getpocket.com/edit';
      const { shareOptions } = this;
      const { url } = shareOptions;
      const serialisedParams = getSerialisedParams({
        url,
      });

      return `${BASE_URL}${serialisedParams}`;
    },
  },

  render(h: CreateElement): VNode {
    return this.generateComponent(h, this.networkURL);
  },
});
