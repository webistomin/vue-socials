/**
* Hey!
*
* SHatenaCount component used for Hatena social network
* @link https://b.hatena.ne.jp/
*/

import Vue, { VueConstructor } from 'vue';
import JSONP from '@/utils/jsonp';
import getSerialisedParams from '@/utils/getSerialisedParams';
import BaseCount, { TBaseCountMixin } from '@/mixins/BaseCount/BaseCount';

/**
* Share parameters for link
*/
export interface ISHatenaCountShareOptions {
  url: string;
}

export type TSHatenaResult = number;

export type TSHatenaResponse = {
  count: TSHatenaResult
};

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<TBaseCountMixin<ISHatenaCountShareOptions>>>).extend({
  name: 'SHatenaCount',

  mixins: [BaseCount<ISHatenaCountShareOptions>()],

  methods: {
    handleOKResponse(count: number): void {
      this.handleResult<TSHatenaResponse>({
        count,
      });

      this.saveCount(count);
    },
  },

  mounted() {
    const { shareOptions } = this;
    const { url } = shareOptions;
    const BASE_URL = 'https://bookmark.hatenaapis.com/count/entry';

    const finalURL = `${BASE_URL}${getSerialisedParams({
      url,
    })}`;

    JSONP<TSHatenaResult>(finalURL, (_err, data) => {
      if (data) {
        this.handleOKResponse(data);
      }
    });
  },
});
