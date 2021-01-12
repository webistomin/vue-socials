/**
 * Hey!
 *
 * SThreema component used for Threema social network
 * @link https://threema.ch/en
 */

import Vue, {
  CreateElement, VNode, VueConstructor,
} from 'vue';
import BaseSocial, { TBaseSocialMixin } from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 */
export interface ISThreemaShareOptions {
  url: string;
  id?: string;
}

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<TBaseSocialMixin<ISThreemaShareOptions>>>).extend({
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

  render(h: CreateElement): VNode {
    return this.generateComponent(h, this.networkURL);
  },
});
