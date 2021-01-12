/**
 * Hey!
 *
 * SLine component used for Line social network
 * @link https://line.me/
 */

import Vue, {
  CreateElement, VNode, VueConstructor,
} from 'vue';
import BaseSocial, { TBaseSocialMixin } from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 * @link https://social-plugins.line.me/en/how_to_install#lineitbutton
 */
export interface ISLineShareOptions {
  url: string;
  text?: string;
}

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<TBaseSocialMixin<ISLineShareOptions>>>).extend({
  name: 'SLine',

  mixins: [BaseSocial<ISLineShareOptions>(
    'Line',
    {
      width: 600,
      height: 600,
    },
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'https://lineit.line.me/share/ui';
      const { shareOptions } = this;
      const { url, text } = shareOptions;

      const serialisedParams = getSerialisedParams({
        url,
        text,
      });

      return `${BASE_URL}${serialisedParams}`;
    },
  },

  render(h: CreateElement): VNode {
    return this.generateComponent(h, this.networkURL);
  },
});
