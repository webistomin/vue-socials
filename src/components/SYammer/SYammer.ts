/**
 * Hey!
 *
 * SYammer component used for Yammer social network
 * @link https://yammer.com/
 */

import { VNode, defineComponent } from 'vue';
import BaseSocial from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 * @link https://developer.yammer.com/docs/share-button
 */
export interface ISYammerShareOptions {
  url?: string;
  text?: string;
  groupId?: string | null;
}

export default /* #__PURE__ */ defineComponent({
  name: 'SYammer',

  mixins: [BaseSocial<ISYammerShareOptions>(
    'Yammer',
    {
      width: 900,
      height: 600,
    },
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'https://www.yammer.com/messages/new';
      const { shareOptions } = this;
      const { text, url, groupId } = shareOptions;
      const serialisedParams = getSerialisedParams({
        login: true,
        status: `${text} ${url}`,
        group_id: groupId,
      });

      return `${BASE_URL}${serialisedParams}`;
    },
  },

  render(): VNode {
    return this.generateComponent(this.networkURL);
  },
});
