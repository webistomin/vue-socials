/**
 * Hey!
 *
 * SLinkedIn component used for LinkedIn social network
 * @link https://www.linkedin.com
 */

import Vue, {
  CreateElement, VNode, VueConstructor,
} from 'vue';
import BaseSocial, { TBaseSocialMixin } from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 * @link https://docs.microsoft.com/en-us/linkedin/consumer/integrations/self-serve/plugins/share-plugin
 */
export interface ISLinkedInShareOptions {
  url: string;
}

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<TBaseSocialMixin<ISLinkedInShareOptions>>>).extend({
  name: 'SLinkedIn',

  mixins: [BaseSocial<ISLinkedInShareOptions>(
    'LinkedIn',
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'https://www.linkedin.com/sharing/share-offsite/';
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
