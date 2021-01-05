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
import { getCommaSeparatedList } from '@/utils/getCommaSeparatedList';
import BaseCount, { TBaseCountMixin } from '@/mixins/BaseCount/BaseCount';

export interface ISFbCountResult {
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

export interface ISFbCountError {
  error: {
    message: string;
    type: string;
    is_transient?: boolean;
    code: number;
    fbtrace_id: string;
  }
}

/**
 * @link https://developers.facebook.com/docs/graph-api/reference/v9.0/url
 */
export interface ISFbCountShareOptions {
  id: string;
  accessToken: string;
  fields?: string[];
  scopes?: string[];
}

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<TBaseCountMixin<ISFbCountShareOptions>>>).extend({
  mixins: [BaseCount<ISFbCountShareOptions>()],

  mounted() {
    const BASE_URL = 'https://graph.facebook.com/';
    const { shareOptions } = this;
    const {
      id, accessToken, fields, scopes,
    } = shareOptions;

    const finalURL = `${BASE_URL}${getSerialisedParams({
      access_token: accessToken,
      fields: getCommaSeparatedList(fields),
      scopes: getCommaSeparatedList(scopes),
      id,
    })}`;

    JSONP<ISFbCountResult | ISFbCountError>(finalURL, (_err, data) => {
      if (data) {
        this.handleResult<ISFbCountResult | ISFbCountError>(data);

        if ('engagement' in data) {
          this.saveCount(data.engagement?.share_count);
        }
      }
    });
  },
});
