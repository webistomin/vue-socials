/**
* Hey!
*
* SDevTo component used for ... social network
* @link ...
*/

import Vue, {
  CreateElement, VNode, VueConstructor,
} from 'vue';
import BaseSocial, { TBaseSocialMixin } from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';
import { getCommaSeparatedList } from '@/utils/getCommaSeparatedList';

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

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<TBaseSocialMixin<ISDevToShareOptions>>>).extend({
  name: 'SDevTo',

  mixins: [BaseSocial<ISDevToShareOptions>()],

  computed: {
    networkURL(): string {
      const BASE_URL = 'https://dev.to/new';
      const { shareOptions } = this;
      const {
        title, isPublished, tags, content,
      } = shareOptions;

      const formattedTitle = title ? `title:${title}` : '';
      const formattedPublish = isPublished ? `published:${isPublished}` : '';
      const formattedTags = tags ? `tags:${getCommaSeparatedList(tags)}` : '';
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

  render(h: CreateElement): VNode {
    return this.generateComponent(h, this.networkURL, 'Dev.to');
  },
});
