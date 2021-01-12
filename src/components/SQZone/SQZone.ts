/**
 * Hey!
 *
 * SQZone component used for QZone social network
 * @link https://qzone.qq.com/
 */

import Vue, {
  CreateElement, VNode, VueConstructor,
} from 'vue';
import BaseSocial, { TBaseSocialMixin } from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 */
export interface ISQZoneShareOptions {
  url: string;
  title?: string;
  summary?: string;
}

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<TBaseSocialMixin<ISQZoneShareOptions>>>).extend({
  name: 'SQZone',

  mixins: [BaseSocial<ISQZoneShareOptions>(
    'QZone',
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey';
      const { shareOptions } = this;
      const { url, title, summary } = shareOptions;
      const serialisedParams = getSerialisedParams({
        url,
        title,
        summary,
      });

      return `${BASE_URL}${serialisedParams}`;
    },
  },

  render(h: CreateElement): VNode {
    return this.generateComponent(h, this.networkURL);
  },
});
