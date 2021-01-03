/**
 * Hey!
 *
 * SVkontakteCount component used for Vkontakte social network
 * @link https://vk.com
 * @example https://vk.com/share.php?act=count&index=1&url=http
 */

import Vue, { CreateElement, PropOptions, VNode } from 'vue';
import JSONP from '@/utils/jsonp';
import getSerialisedParams from '@/utils/getSerialisedParams';

declare global {
  interface Window {
    VK: {
      Share?: {
        count: (index: number, count: number) => void;
      };
      callbacks?: ((count?: number) => void)[];
    };
  }
}

export interface ISVkontakteCountShareOptions {
  url?: string;
}

export default /* #__PURE__ */ Vue.extend({
  props: {
    /**
     * Requested features of the new window
     * @link https://developer.mozilla.org/en-US/docs/Web/API/Window/open#Window_features
     */
    shareOptions: {
      type: Object,
      default: () => ({}),
    } as PropOptions<ISVkontakteCountShareOptions>,
  },

  data() : {
    count: number | undefined,
  } {
    return {
      count: undefined,
    };
  },

  mounted() {
    const { shareOptions } = this;
    const { url } = shareOptions;
    const BASE_URL = 'https://vk.com/share.php';

    if (!window.VK) {
      window.VK = {};
    }

    window.VK.callbacks = [];
    window.VK.Share = {
      count: (index, count) => window.VK.callbacks![index](count),
    };

    const index = window.VK.callbacks.length;
    window.VK.callbacks.push(this.saveCount);

    const finalURL = `${BASE_URL}${getSerialisedParams({
      act: 'count',
      index,
      url,
    })}`;

    JSONP(finalURL);
  },

  methods: {
    saveCount(count: number | undefined) {
      this.count = count;
    },
  },

  render(h: CreateElement): VNode {
    return h(
      'span',
      {},
      String(Number(this.count)),
    );
  },
});
