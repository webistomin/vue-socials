/**
 * Hey!
 *
 * SFacebookMessenger component used for FacebookMessenger social network
 * @link https://facebook.com/
 * @example https://www.facebook.com/dialog/send?link=https%3A%2F%2Fgithub.com%2F&app_id=123456789&redirect_uri=https%3A%2F%2Fwww.domain.com%2F
 */

import { VNode, defineComponent } from 'vue';
import BaseSocial from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 * @link https://developers.facebook.com/docs/sharing/reference/send-dialog#examples
 * url => link
 * appId => app_id
 * redirectUri => redirect_uri
 */
export interface ISFacebookMessengerShareOptions {
  url: string;
  appId: number;
  redirectUri?: string;
  to?: string;
}

export default /* #__PURE__ */ defineComponent({
  name: 'SFacebookMessenger',

  mixins: [BaseSocial<ISFacebookMessengerShareOptions>(
    'Facebook Messenger',
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'http://www.facebook.com/dialog/send';
      const { shareOptions } = this;
      const {
        url, appId, redirectUri, to,
      } = shareOptions;
      const serialisedParams = getSerialisedParams({
        link: url,
        app_id: appId,
        redirect_uri: redirectUri,
        to,
      });

      return `${BASE_URL}${serialisedParams}`;
    },
  },

  render(): VNode {
    return this.generateComponent(this.networkURL);
  },
});
