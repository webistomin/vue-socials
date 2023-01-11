/**
 * Hey!
 *
 * SGoogleBookmarks component used for Google social network
 * @link https://www.google.com/bookmarks/
 * @example https://www.google.com/bookmarks/mark?op=edit&output=popup&bkmk=https%3A%2F%2Fgithub.com%2F&title=Title&annotation=Annotation&labels=tag
 */

import { VNode, defineComponent } from 'vue';
import BaseSocial from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';
import getSeparatedList from '@/utils/getSeparatedList';

/**
 * Share parameters for link
 */
export interface ISGoogleBookmarksShareOptions {
  url: string;
  title?: string;
  annotation?: string;
  tags?: string[];
}

export default /* #__PURE__ */ defineComponent({
  name: 'SGoogleBookmarks',

  mixins: [BaseSocial<ISGoogleBookmarksShareOptions>(
    'Google Bookmarks',
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'https://www.google.com/bookmarks/mark';
      const { shareOptions } = this;
      const {
        url, title, annotation, tags,
      } = shareOptions;

      const serialisedParams = getSerialisedParams({
        op: 'edit',
        output: 'popup',
        bkmk: url,
        title,
        annotation,
        labels: getSeparatedList(tags),
      });

      return `${BASE_URL}${serialisedParams}`;
    },
  },

  render(): VNode {
    return this.generateComponent(this.networkURL);
  },
});
