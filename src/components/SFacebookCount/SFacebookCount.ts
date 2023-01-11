/**
 * Hey!
 *
 * SFacebookCount component used for Facebook social network
 * @link https://www.facebook.com/
 * @example https://graph.facebook.com/?url=https://github.com/
 */

import { defineComponent } from 'vue';
import JSONP from '@/utils/jsonp';
import getSerialisedParams from '@/utils/getSerialisedParams';
import getSeparatedList from '@/utils/getSeparatedList';
import BaseCount from '@/mixins/BaseCount/BaseCount';

export interface ISFacebookCountSuccessResponse {
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

export interface ISFacebookCountErrorResponse {
  error: {
    message: string;
    type: string;
    is_transient?: boolean;
    code: number;
    fbtrace_id: string;
  }
}

export type TSFacebookCountResult = ISFacebookCountSuccessResponse | ISFacebookCountErrorResponse;

/**
 * @link https://developers.facebook.com/docs/graph-api/reference/v9.0/url
 */
export interface ISFacebookCountShareOptions {
  id: string;
  accessToken: string;
  fields?: string[];
  scopes?: string[];
}

export default /* #__PURE__ */ defineComponent({
  mixins: [BaseCount<ISFacebookCountShareOptions, TSFacebookCountResult>(
    'Facebook',
  )],

  methods: {
    handleFacebookResponse(data: TSFacebookCountResult) {
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

    JSONP<TSFacebookCountResult>(finalURL, (err, data) => {
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
