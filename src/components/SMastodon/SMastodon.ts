/**
 * Hey!
 *
 * SMastodon component used for mastodon social network
 * @link https://mastodon.social/
 */

import { VNode, defineComponent } from 'vue';
import BaseSocial from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 * @link https://aly-ve.github.io/Mastodon-share-button/
 */
export interface ISMastodonShareOptions {
  domain: string
  text?: string
  url?: string
}

export default /* #__PURE__ */ defineComponent({
  name: 'SMastodon',

  mixins: [BaseSocial<ISMastodonShareOptions>(
    'Mastodon',
    {
      width: 600,
      height: 700,
    },
  )],

  computed: {
    networkURL(): string {
      const { shareOptions } = this;
      const { domain, text, url } = shareOptions;
      const BASE_URL = `${domain}/share`;
      const serialisedParams = getSerialisedParams({
        text,
        url,
      });

      return `${BASE_URL}${serialisedParams}`;
    },
  },

  render(): VNode {
    return this.generateComponent(this.networkURL);
  },
});
