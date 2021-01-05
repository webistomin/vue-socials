/**
 * Hey!
 *
 * SVkontakteCount component used for Vkontakte social network
 * @link https://vk.com
 * @example https://vk.com/share.php?act=count&index=1&url=http
 */

import Vue, {
  VueConstructor,
} from 'vue';
import JSONP from '@/utils/jsonp';
import getSerialisedParams from '@/utils/getSerialisedParams';
import BaseCount, { TBaseCountMixin } from '@/mixins/BaseCount/BaseCount';

declare global {
  interface Window {
    VK: {
      Share?: {
        count: TSVkontakteCallback;
      };
      callbacks?: {
        [key: string]: TSVkontakteCallback
      };
    };
  }
}

export interface ISVkontakteCountShareOptions {
  url?: string;
}

export type TSVkontakteCallback = (index: number, count: number) => void;

export interface ISVkontakteResult {
  index: number;
  count: number;
}

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<TBaseCountMixin<ISVkontakteCountShareOptions>>>).extend({
  mixins: [BaseCount<ISVkontakteCountShareOptions>()],

  methods: {
    handleVKResponse(index: number, count: number): void {
      this.handleResult<ISVkontakteResult>({
        index,
        count,
      });

      this.saveCount(count);

      delete window.VK.callbacks?.[`cb${index}`];
    },
  },

  mounted() {
    const { shareOptions } = this;
    const { url } = shareOptions;
    const BASE_URL = 'https://vk.com/share.php';

    if (!window.VK) {
      window.VK = {};
    }

    if (!window.VK.callbacks) {
      window.VK.callbacks = {};
    }

    window.VK.Share = {
      count: (index, count) => window.VK.callbacks?.[`cb${index}`]?.(index, count),
    };

    const index = Object.keys(window.VK.callbacks).length;
    const key = `cb${index}`;
    window.VK.callbacks[key] = this.handleVKResponse;

    const finalURL = `${BASE_URL}${getSerialisedParams({
      act: 'count',
      index,
      url,
    })}`;

    JSONP(finalURL);
  },
});
