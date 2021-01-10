/**
 * Hey!
 *
 * SEvernote component used for Evernote social network
 * @link https://www.evernote.com/
 * @example https://www.evernote.com/clip.action?url=https%3A%2F%2Fgithub.com%2F&title=Title
 */

import Vue, {
  CreateElement, VNode, VueConstructor,
} from 'vue';
import BaseSocial, { TBaseSocialMixin } from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 */
export interface ISEvernoteShareOptions {
  url: string;
  title?: string;
}

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<TBaseSocialMixin<ISEvernoteShareOptions>>>).extend({
  name: 'SEvernote',

  mixins: [BaseSocial<ISEvernoteShareOptions>(
    'Evernote',
    {
      width: 800,
      height: 560,
    },
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'https://www.evernote.com/clip.action';
      const { shareOptions } = this;
      const { url, title } = shareOptions;
      const serialisedParams = getSerialisedParams({
        url,
        title,
      });

      return `${BASE_URL}${serialisedParams}`;
    },
  },

  render(h: CreateElement): VNode {
    return this.generateComponent(h, this.networkURL);
  },
});
