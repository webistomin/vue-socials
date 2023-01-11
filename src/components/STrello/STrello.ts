/**
 * Hey!
 *
 * STrello component used for Trello social network
 * @link https://trello.com/
 */

import { VNode, defineComponent } from 'vue';
import BaseSocial from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 */
export interface ISTrelloShareOptions {
  url: string;
  name?: string;
  description?: string;
}

export default /* #__PURE__ */ defineComponent({
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

  render(): VNode {
    return this.generateComponent(this.networkURL);
  },
});
