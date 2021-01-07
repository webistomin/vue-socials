/**
* Hey!
*
* SFacebookMessenger component used for FacebookMessenger social network
* @link https://facebook.com
*/

import Vue, {
  CreateElement, VNode, VueConstructor,
} from 'vue';
import BaseSocial, { TBaseSocialMixin } from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
* Share parameters for link
* @link https://developers.facebook.com/docs/sharing/reference/send-dialog#examples
*/
export interface ISFacebookMessengerShareOptions {
  url: string;
  appId: number;
  redirectUri?: string;
}

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<TBaseSocialMixin<ISFacebookMessengerShareOptions>>>).extend({
  name: 'SFacebookMessenger',

  mixins: [BaseSocial<ISFacebookMessengerShareOptions>()],

  computed: {
    networkURL(): string {
      const BASE_URL = 'http://www.facebook.com/dialog/send';
      const { shareOptions } = this;
      const { url, appId, redirectUri } = shareOptions;
      const serialisedParams = getSerialisedParams({
        link: url,
        app_id: appId,
        redirect_uri: redirectUri,
      });

      return `${BASE_URL}${serialisedParams}`;
    },
  },

  render(h: CreateElement): VNode {
    return this.generateComponent(h, this.networkURL, 'facebook');
  },
});
