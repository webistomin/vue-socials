/**
 * Hey!
 *
 * SHatenaCount component used for Hatena social network
 * @link https://b.hatena.ne.jp/
 */

import { defineComponent } from 'vue';
import JSONP from '@/utils/jsonp';
import getSerialisedParams from '@/utils/getSerialisedParams';
import BaseCount from '@/mixins/BaseCount/BaseCount';

/**
 * Share parameters for link
 */
export interface ISHatenaCountShareOptions {
  url: string;
}

export type TSHatenaResult = {
  count: number;
};

export default /* #__PURE__ */ defineComponent({
  name: 'SHatenaCount',

  mixins: [BaseCount<ISHatenaCountShareOptions, TSHatenaResult>(
    'Hatena',
  )],

  methods: {
    handleOKResponse(count: number): void {
      this.handleResult({
        count,
      });

      this.handleCount(count);
    },
  },

  mounted() {
    const { shareOptions } = this;
    const { url } = shareOptions;
    const BASE_URL = 'https://bookmark.hatenaapis.com/count/entry';

    const finalURL = `${BASE_URL}${getSerialisedParams({
      url,
    })}`;

    this.handleLoading(true);

    JSONP<number>(finalURL, (err, data) => {
      this.handleLoading(false);

      if (err) {
        this.handleError(err);
      }

      if (data) {
        this.handleOKResponse(data);
      }
    });
  },
});
