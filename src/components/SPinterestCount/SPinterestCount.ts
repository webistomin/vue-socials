/**
 * Hey!
 *
 * SPinterestCount component used for Pinterest social network
 * @link https://www.pinterest.com/
 */

import Vue, { VueConstructor } from 'vue';
import JSONP from '@/utils/jsonp';
import getSerialisedParams from '@/utils/getSerialisedParams';
import BaseCount, { TBaseCountMixin } from '@/mixins/BaseCount/BaseCount';

/**
 * Share parameters for link
 */
export interface ISPinterestCountShareOptions {
  url: string;
}

export interface ISPinterestResult {
  url: string;
  count: number;
}

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<TBaseCountMixin<ISPinterestCountShareOptions, ISPinterestResult>>>).extend({
  name: 'SPinterestCount',

  mixins: [BaseCount<ISPinterestCountShareOptions, ISPinterestResult>(
    'Pinterest',
  )],

  methods: {
    handlePinterestResponse(data: ISPinterestResult): void {
      this.handleResult(data);

      this.handleCount(data.count);
    },
  },

  mounted() {
    const { shareOptions } = this;
    const { url } = shareOptions;
    const BASE_URL = 'https://api.pinterest.com/v1/urls/count.json';

    const finalURL = `${BASE_URL}${getSerialisedParams({
      url,
    })}`;

    this.handleLoading(true);

    JSONP<ISPinterestResult>(finalURL, (err, data) => {
      this.handleLoading(false);

      if (err) {
        this.handleError(err);
      }

      if (data) {
        this.handlePinterestResponse(data);
      }
    });
  },
});
