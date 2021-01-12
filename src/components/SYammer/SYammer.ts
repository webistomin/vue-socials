/**
 * Hey!
 *
 * SYammer component used for Yammer social network
 * @link https://yammer.com/
 */

import Vue, {
  CreateElement, VNode, VueConstructor,
} from 'vue';
import BaseSocial, { TBaseSocialMixin } from '@/mixins/BaseSocial/BaseSocial';
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

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<TBaseSocialMixin<ISYammerShareOptions>>>).extend({
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

  render(h: CreateElement): VNode {
    return this.generateComponent(h, this.networkURL);
  },
});
