/**
 * Hey!
 *
 * STumblrCount component used for Tumblr social network
 * @link https://tumblr.com/
 */

import { defineComponent } from 'vue';
import getSerialisedParams from '@/utils/getSerialisedParams';
import BaseCount from '@/mixins/BaseCount/BaseCount';
import JSONP from '@/utils/jsonp';

/**
 * Share parameters for link
 * @link https://www.tumblr.com/docs/en/share_button
 */
export interface ISTumblrCountShareOptions {
  url: string;
}

export interface ISTumblrResult {
  meta: {
    status: number;
    msg: string;
  }
  response: {
    url: string;
    note_count: number;
  }
}

export default /* #__PURE__ */ defineComponent({
  name: 'STumblrCount',

  mixins: [BaseCount<ISTumblrCountShareOptions, ISTumblrResult>(
    'Tumblr',
  )],

  methods: {
    handleTumblrResponse(data: ISTumblrResult): void {
      this.handleResult(data);

      this.handleCount(data.response?.note_count);
    },
  },

  mounted() {
    const { shareOptions } = this;
    const { url } = shareOptions;
    const BASE_URL = 'http://api.tumblr.com/v2/share/stats';

    const finalURL = `${BASE_URL}${getSerialisedParams({
      url,
    })}`;

    this.handleLoading(true);

    JSONP<ISTumblrResult>(finalURL, (err, data) => {
      this.handleLoading(false);

      if (err) {
        this.handleError(err);
      }

      if (data) {
        this.handleTumblrResponse(data);
      }
    });
  },
});
