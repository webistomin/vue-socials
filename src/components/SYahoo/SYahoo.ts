/**
 * Hey!
 *
 * SYahoo component used for Yahoo social network
 * @link http://compose.mail.yahoo.com/
 */

import Vue, {
  CreateElement, VNode, VueConstructor,
} from 'vue';
import BaseSocial, { TBaseSocialMixin } from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 */
export interface ISYahooShareOptions {
  email: string;
  subject?: string;
  body?: string;
}

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<TBaseSocialMixin<ISYahooShareOptions>>>).extend({
  name: 'SYahoo',

  mixins: [BaseSocial<ISYahooShareOptions>(
    'Yahoo',
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'http://compose.mail.yahoo.com/';
      const { shareOptions } = this;
      const { email, subject, body } = shareOptions;
      const serialisedParams = getSerialisedParams({
        to: email,
        subject,
        body,
      });

      return `${BASE_URL}${serialisedParams}`;
    },
  },

  render(h: CreateElement): VNode {
    return this.generateComponent(h, this.networkURL);
  },
});
