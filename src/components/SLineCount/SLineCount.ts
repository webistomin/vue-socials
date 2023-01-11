/**
 * Hey!
 *
 * SLineCount component used for Line social network
 * @link https://line.me/
 */

import { defineComponent } from 'vue';
import HTTP from '@/utils/http';
import getSerialisedParams from '@/utils/getSerialisedParams';
import BaseCount from '@/mixins/BaseCount/BaseCount';

/**
 * Share parameters for link
 * @link https://social-plugins.line.me/en/how_to_install#lineitbutton
 */
export interface ISLineCountShareOptions {
  url: string;
}

export interface ISLineResult {
  share: number;
}

export default /* #__PURE__ */ defineComponent({
  name: 'SLineCount',

  mixins: [BaseCount<ISLineCountShareOptions, ISLineResult>(
    'Line',
  )],

  methods: {
    handlePinterestResponse(data: ISLineResult): void {
      this.handleResult(data);

      this.handleCount(data.share);
    },
  },

  mounted() {
    const { shareOptions } = this;
    const { url } = shareOptions;
    const BASE_URL = 'https://api.line.me/social-plugin/metrics';

    const finalURL = `${BASE_URL}${getSerialisedParams({
      url,
    })}`;

    this.handleLoading(true);

    HTTP<ISLineResult>(finalURL, (err, data) => {
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
