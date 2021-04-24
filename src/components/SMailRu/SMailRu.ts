/**
 * Hey!
 *
 * SMailRu component used for Mail.ru social network
 * @link https://my.mail.ru/
 */

import { VNode, defineComponent } from 'vue';
import BaseSocial from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 * @link https://api.mail.ru/sites/plugins/share/extended/
 */
export interface ISMailRuShareOptions {
  url: string;
  title?: string;
  description?: string;
  image?: string;
  swfUrl?: string;
  width?: number;
  height?: number;
}

export default /* #__PURE__ */ defineComponent({
  name: 'SMailRu',

  mixins: [BaseSocial<ISMailRuShareOptions>(
    'Mail.ru',
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'https://connect.mail.ru/share';
      const { shareOptions } = this;
      const {
        url, title, description, image, swfUrl, width, height,
      } = shareOptions;

      const serialisedParams = getSerialisedParams({
        share_url: url,
        title,
        description,
        image_url: image,
        swfurl: swfUrl,
        width,
        height,
      });

      return `${BASE_URL}${serialisedParams}`;
    },
  },

  render(): VNode {
    return this.generateComponent(this.networkURL);
  },
});
