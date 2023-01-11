/**
 * Hey!
 *
 * SEvernote component used for Evernote social network
 * @link https://www.evernote.com/
 * @example https://www.evernote.com/clip.action?url=https%3A%2F%2Fgithub.com%2F&title=Title
 */

import { VNode, defineComponent } from 'vue';
import BaseSocial from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 */
export interface ISEvernoteShareOptions {
  url: string;
  title?: string;
}

export default /* #__PURE__ */ defineComponent({
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

  render(): VNode {
    return this.generateComponent(this.networkURL);
  },
});
