/**
 * Hey!
 *
 * SFacebookCount component used for Facebook social network
 * @link https://www.facebook.com/
 * @example https://graph.facebook.com/?url=https://github.com/
 */

import Vue, { VueConstructor } from 'vue';
import JSONP from '@/utils/jsonp';
import getSerialisedParams from '@/utils/getSerialisedParams';
import getSeparatedList from '@/utils/getSeparatedList';
import BaseCount, { TBaseCountMixin } from '@/mixins/BaseCount/BaseCount';

export interface ISFacebookCountResult {
  engagement?: {
    reaction_count: number;
    comment_count: number;
    share_count: number;
    comment_plugin_count: number;
  }
  og_object?: {
    description: string;
    id: string;
    title: string;
    type: string;
    updated_time: string;
  }
  app_links?: unknown;
}

export interface ISFacebookCountError {
  error: {
    message: string;
    type: string;
    is_transient?: boolean;
    code: number;
    fbtrace_id: string;
  }
}

export type TSFacebookCountResponse = ISFacebookCountResult | ISFacebookCountError;

/**
 * @link https://developers.facebook.com/docs/graph-api/reference/v9.0/url
 */
export interface ISFacebookCountShareOptions {
  id: string;
  accessToken: string;
  fields?: string[];
  scopes?: string[];
}

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<TBaseCountMixin<ISFacebookCountShareOptions, TSFacebookCountResponse>>>).extend({
  mixins: [BaseCount<ISFacebookCountShareOptions, TSFacebookCountResponse>(
    'Facebook',
  )],

  methods: {
    handleFacebookResponse(data: TSFacebookCountResponse) {
      this.handleResult(data);

      if ('engagement' in data) {
        this.handleCount(data.engagement?.share_count);
      }
    },
  },

  mounted() {
    const BASE_URL = 'https://graph.facebook.com/';
    const { shareOptions } = this;
    const {
      id, accessToken, fields, scopes,
    } = shareOptions;

    const finalURL = `${BASE_URL}${getSerialisedParams({
      id,
      access_token: accessToken,
      fields: getSeparatedList(fields),
      scopes: getSeparatedList(scopes),
    })}`;

    this.handleLoading(true);

    JSONP<TSFacebookCountResponse>(finalURL, (err, data) => {
      this.handleLoading(false);

      if (data) {
        this.handleFacebookResponse(data);
      }

      if (err) {
        this.handleError(err);
      }
    });
  },
});
