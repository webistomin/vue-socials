/**
 * Hey!
 *
 * SOdnoklassnikiCount component used for Odnoklassniki (English: "Classmates") social network
 * @link https://ok.ru/
 */

import { defineComponent } from 'vue';
import HTTP from '@/utils/http';
import getSerialisedParams from '@/utils/getSerialisedParams';
import BaseCount from '@/mixins/BaseCount/BaseCount';

/**
 * Share parameters for link
 * @link https://apiok.ru/en/ext/like
 */
export interface ISOdnoklassnikiCountShareOptions {
  ref: string
}

export interface ISOdnoklassnikiResult {
  count: number;
}

export default /* #__PURE__ */ defineComponent({
  name: 'SOdnoklassnikiCount',

  mixins: [BaseCount<ISOdnoklassnikiCountShareOptions, ISOdnoklassnikiResult>(
    'Odnoklassniki',
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
    const { ref } = shareOptions;
    const BASE_URL = 'https://connect.ok.ru/dk';

    const finalURL = `${BASE_URL}${getSerialisedParams({
      'st.cmd': 'extLike',
      tp: 'json',
      ref,
    })}`;

    this.handleLoading(true);

    HTTP<ISOdnoklassnikiResult>(finalURL, (err, data) => {
      this.handleLoading(false);

      if (err) {
        this.handleError(err);
      }

      if (data) {
        this.handleOKResponse(data.count);
      }
    });
  },
});
