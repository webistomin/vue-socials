/**
* Hey!
*
* SGithubGistCount component used for Github Gists social network
* @link https://gist.github.com/
*/

import Vue, { VueConstructor } from 'vue';
import BaseCount, { TBaseCountMixin } from '@/mixins/BaseCount/BaseCount';
import HTTP from '@/utils/http';

const GITHUB_LINK_TYPES = {
  fork: 'fork',
};

export type TSGithubLinkType = typeof GITHUB_LINK_TYPES[keyof typeof GITHUB_LINK_TYPES];

/**
* Share parameters for link
*/
export interface ISGithubGistCountShareOptions {
  gistId: string;
  type: TSGithubLinkType;
}

export interface SGithubGistCountResult {
  forks: unknown[]
}

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<TBaseCountMixin<ISGithubGistCountShareOptions>>>).extend({
  name: 'SGithubGistCount',

  methods: {
    handleGithubResponse(data: SGithubGistCountResult): void {
      const { shareOptions } = this;
      const { type } = shareOptions;
      this.handleResult<SGithubGistCountResult>(data);
      let count;

      switch (type) {
        default:
        case GITHUB_LINK_TYPES.fork:
          count = data.forks.length;
          break;
      }

      this.saveCount(count);
    },
  },

  mixins: [BaseCount<SGithubGistCountResult>()],

  mounted() {
    const { shareOptions } = this;
    const { gistId } = shareOptions;
    const BASE_URL = 'https://api.github.com/';

    const finalURL = `${BASE_URL}gists/${gistId}`;

    HTTP<SGithubGistCountResult>(finalURL, (_err, data) => {
      if (data) {
        this.handleGithubResponse(data);
      }
    });
  },
});
