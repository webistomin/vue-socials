/**
 * Hey!
 *
 * SQZone component used for QZone social network
 * @link https://qzone.qq.com/
 */

import { VNode, defineComponent } from 'vue';
import BaseSocial from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 */
export interface ISQZoneShareOptions {
  url: string;
  title?: string;
  summary?: string;
}

export default /* #__PURE__ */ defineComponent({
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

  render(): VNode {
    return this.generateComponent(this.networkURL);
  },
});
