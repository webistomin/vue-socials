/**
 * Hey!
 *
 * SHackerNews component used for HackerNews social network
 * @link https://news.ycombinator.com/
 * @example https://news.ycombinator.com/submitlink?u=https%3A%2F%2Fgithub.com%2F&t=Title
 */

import Vue, {
  CreateElement, VNode, VueConstructor,
} from 'vue';
import BaseSocial, { TBaseSocialMixin } from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 */
export interface ISHackerNewsShareOptions {
  url: string;
  title?: string;
}

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<TBaseSocialMixin<ISHackerNewsShareOptions>>>).extend({
  name: 'SHackerNews',

  mixins: [BaseSocial<ISHackerNewsShareOptions>(
    'HackerNews',
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'https://news.ycombinator.com/submitlink';
      const { shareOptions } = this;
      const { url, title } = shareOptions;

      const serialisedParams = getSerialisedParams({
        u: url,
        t: title,
      });

      return `${BASE_URL}${serialisedParams}`;
    },
  },

  render(h: CreateElement): VNode {
    return this.generateComponent(h, this.networkURL);
  },
});
