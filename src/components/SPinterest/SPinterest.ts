/**
 * Hey!
 *
 * SPinterest component used for Pinterest social network
 * @link https://www.pinterest.com/
 */

import Vue, {
  CreateElement, VNode, VueConstructor,
} from 'vue';
import BaseSocial, { TBaseSocialMixin } from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 * @link https://developers.pinterest.com/docs/widgets/save/?
 */
export interface ISPinterestShareOptions {
  url: string;
  media: string;
  description?: string;
}

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<TBaseSocialMixin<ISPinterestShareOptions>>>).extend({
  name: 'SPinterest',

  mixins: [BaseSocial<ISPinterestShareOptions>(
    'Pinterest',
    {
      width: 700,
      height: 700,
    },
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'http://pinterest.com/pin/create/button/';
      const { shareOptions } = this;
      const { url, media, description } = shareOptions;

      const serialisedParams = getSerialisedParams({
        url,
        media,
        description,
      });

      return `${BASE_URL}${serialisedParams}`;
    },
  },

  render(h: CreateElement): VNode {
    return this.generateComponent(h, this.networkURL);
  },
});
