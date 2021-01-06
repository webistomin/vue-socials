/**
* Hey!
*
* STumblrCount component used for Tumblr social network
* @link https://tumblr.com/
*/

import Vue, { VueConstructor } from 'vue';
import HTTP from '@/utils/http';
import getSerialisedParams from '@/utils/getSerialisedParams';
import BaseCount, { TBaseCountMixin } from '@/mixins/BaseCount/BaseCount';

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

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<TBaseCountMixin<ISTumblrCountShareOptions>>>).extend({
  name: 'STumblrCount',

  mixins: [BaseCount<ISTumblrCountShareOptions>()],

  methods: {
    handleTumblrResponse(data: ISTumblrResult): void {
      this.handleResult<ISTumblrResult>(data);

      this.saveCount(data.response?.note_count);
    },
  },

  mounted() {
    const { shareOptions } = this;
    const { url } = shareOptions;
    const BASE_URL = 'http://api.tumblr.com/v2/share/stats';

    const finalURL = `${BASE_URL}${getSerialisedParams({
      url,
    })}`;

    HTTP<ISTumblrResult>(finalURL, (_err, data) => {
      if (data) {
        this.handleTumblrResponse(data);
      }
    });
  },
});
