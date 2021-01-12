/**
 * Hey!
 *
 * SViber component used for Viber social network
 * @link https://www.viber.com/
 */

import Vue, {
  CreateElement, VNode, VueConstructor,
} from 'vue';
import BaseSocial, { TBaseSocialMixin } from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 * @link https://developers.viber.com/docs/tools/share-button/
 */
export interface ISViberShareOptions {
  url: string;
  text: string;
}

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<TBaseSocialMixin<ISViberShareOptions>>>).extend({
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

  render(h: CreateElement): VNode {
    return this.generateComponent(h, this.networkURL);
  },
});
