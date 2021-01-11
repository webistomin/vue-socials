/**
* Hey!
*
* SOdnoklassnikiCount component used for Odnoklassniki (English: "Classmates") social network
* @link https://ok.ru/
*/

import Vue, { VueConstructor } from 'vue';
import HTTP from '@/utils/http';
import getSerialisedParams from '@/utils/getSerialisedParams';
import BaseCount, { TBaseCountMixin } from '@/mixins/BaseCount/BaseCount';

// declare global {
//   interface Window {
//     ODKL: {
//       updateCount?: TSOKCallback;
//       callbacks?: {
//         [key: string]: TSOKCallback
//       };
//     };
//   }
// }

// export type TSOKCallback = (index: string, count: number) => void;

/**
* Share parameters for link
* @link https://apiok.ru/en/ext/like
*/
export interface ISOdnoklassnikiCountShareOptions {
  ref: string
}

export interface ISOdnoklassnikiResult {
  // index: string;
  count: number;
}

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<TBaseCountMixin<ISOdnoklassnikiCountShareOptions, ISOdnoklassnikiResult>>>).extend({
  name: 'SOdnoklassnikiCount',

  mixins: [BaseCount<ISOdnoklassnikiCountShareOptions, ISOdnoklassnikiResult>(
    'Odnoklassniki',
  )],

  methods: {
    handleOKResponse(count: number): void {
      this.handleResult({
        // index,
        count,
      });

      this.handleCount(count);

      // delete window.ODKL.callbacks?.[`cb${index}`];
    },
  },

  mounted() {
    const { shareOptions } = this;
    const { ref } = shareOptions;
    const BASE_URL = 'https://connect.ok.ru/dk';
    //
    // if (!window.ODKL) {
    //   window.ODKL = {};
    // }
    //
    // if (!window.ODKL.callbacks) {
    //   window.ODKL.callbacks = {};
    // }
    //
    // window.ODKL.updateCount = (index, count) => {
    //   const callbackIndex = index;
    //   window.ODKL.callbacks?.[callbackIndex]?.(callbackIndex, count);
    // };
    //
    // const index = Object.keys(window.ODKL.callbacks).length;
    // const key = `cb${index}`;
    // window.ODKL.callbacks[key] = this.handleOKResponse;

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
