/**
 * Hey!
 *
 * SDevTo component used for DevTo social network
 * @link https://dev.to/
 * @example https://dev.to/new?prefill=%0A%20%20%20%20%20%20%20%20---%0A%20%20%20%20%20%20%20%20title%3ATitle%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20tags%3Atag%0A%20%20%20%20%20%20%20%20---%0A%20%20%20%20%20%20%20%20Text%201%0AText%202%0A%7B%25%20wikipedia%20https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FWikipedia%20%25%7D
 */

import { VNode, defineComponent } from 'vue';
import BaseSocial from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';
import getSeparatedList from '@/utils/getSeparatedList';

/**
 * Share parameters for link
 * @link https://dev.to/devteam/announcing-off-platform-share-to-dev-functionality-57j9
 */
export interface ISDevToShareOptions {
  title?: string;
  isPublished?: boolean;
  tags?: string[];
  content?: string;
}

export default /* #__PURE__ */ defineComponent({
  name: 'SDevTo',

  mixins: [BaseSocial<ISDevToShareOptions>(
    'DevTo',
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'https://dev.to/new';
      const { shareOptions } = this;
      const {
        title, isPublished, tags, content,
      } = shareOptions;

      const formattedTitle = title ? `title:${title}` : '';
      const formattedPublish = isPublished ? `published:${isPublished}` : '';
      const formattedTags = tags ? `tags:${getSeparatedList(tags, ', ')}` : '';
      const formattedContent = content || '';

      const serialisedParams = getSerialisedParams({
        prefill: `
        ---
        ${formattedTitle}
        ${formattedPublish}
        ${formattedTags}
        ---
        ${formattedContent}`,
      });

      return `${BASE_URL}${serialisedParams}`;
    },
  },

  render(): VNode {
    return this.generateComponent(this.networkURL);
  },
});
