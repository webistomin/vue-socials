/**
 * Hey!
 *
 * SGithubGist component used for Github Gists social network
 * @link https://gist.github.com/
 * @example https://gist.github.com/ai/e3683b03ba936ade91d33dbc721cd6d8/stargazers
 */

import { VNode, defineComponent } from 'vue';
import BaseSocial from '@/mixins/BaseSocial/BaseSocial';

const GITHUB_LINK_TYPES = {
  gist: 'gist',
  star: 'star',
  fork: 'fork',
  download: 'download',
};

export type TSGithubLinkType = typeof GITHUB_LINK_TYPES[keyof typeof GITHUB_LINK_TYPES];

/**
 * Share parameters for link
 */
export interface ISGithubGistShareOptions {
  username: string;
  gistId: string;
  type: TSGithubLinkType;
}

export default /* #__PURE__ */ defineComponent({
  name: 'SGithubGist',

  mixins: [BaseSocial<ISGithubGistShareOptions>(
    'GitHub Gists',
    {
      width: 900,
      height: 600,
    },
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'https://gist.github.com/';
      const { shareOptions } = this;
      const { username, gistId, type } = shareOptions;

      switch (type) {
        case GITHUB_LINK_TYPES.fork:
          return `${BASE_URL}${username}/${gistId}/forks`;
        case GITHUB_LINK_TYPES.star:
          return `${BASE_URL}${username}/${gistId}/stargazers`;
        case GITHUB_LINK_TYPES.download:
          return `${BASE_URL}${username}/${gistId}/archive/master.zip`;
        case GITHUB_LINK_TYPES.gist:
        default:
          return `${BASE_URL}${username}/${gistId}`;
      }
    },

    ariaLabel(): string {
      const { shareOptions } = this;
      const {
        type,
      } = shareOptions;

      switch (type) {
        case GITHUB_LINK_TYPES.fork:
          return 'Fork this gist.';
        case GITHUB_LINK_TYPES.star:
          return 'Star this gist.';
        case GITHUB_LINK_TYPES.download:
          return 'Download this gist.';
        case GITHUB_LINK_TYPES.gist:
        default:
          return 'Watch this gist.';
      }
    },
  },

  render(): VNode {
    return this.generateComponent(this.networkURL);
  },
});
