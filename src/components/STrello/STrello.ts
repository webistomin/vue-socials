/**
 * Hey!
 *
 * STrello component used for Trello social network
 * @link https://trello.com/
 */

import Vue, {
  CreateElement, VNode, VueConstructor,
} from 'vue';
import BaseSocial, { TBaseSocialMixin } from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 */
export interface ISTrelloShareOptions {
  url: string;
  name?: string;
  description?: string;
}

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<TBaseSocialMixin<ISTrelloShareOptions>>>).extend({
  name: 'STrello',

  mixins: [BaseSocial<ISTrelloShareOptions>(
    'Trello',
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'https://trello.com/add-card';
      const { shareOptions } = this;
      const { url, name, description } = shareOptions;
      const serialisedParams = getSerialisedParams({
        url,
        name,
        desc: description,
        mode: 'popup',
      });

      return `${BASE_URL}${serialisedParams}`;
    },
  },

  render(h: CreateElement): VNode {
    return this.generateComponent(h, this.networkURL);
  },
});
