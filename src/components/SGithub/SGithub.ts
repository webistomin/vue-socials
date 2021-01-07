/**
* Hey!
*
* SGithub component used for GitHub social network
* @link ...
*/

import Vue, {
  CreateElement, VNode, VueConstructor,
} from 'vue';
import BaseSocial, { TBaseSocialMixin } from '@/mixins/BaseSocial/BaseSocial';

const GITHUB_LINK_TYPES = {
  watch: 'watch',
  fork: 'fork',
  sponsor: 'sponsor',
  star: 'star',
  follow: 'follow',
};

export type TSGithubLinkType = typeof GITHUB_LINK_TYPES[keyof typeof GITHUB_LINK_TYPES];

/**
* Share parameters for link
*/
export interface ISGithubShareOptions {
  username: string;
  repository?: string;
  type?: TSGithubLinkType;
}

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<TBaseSocialMixin<ISGithubShareOptions>>>).extend({
  name: 'SGithub',

  mixins: [BaseSocial<ISGithubShareOptions>()],

  computed: {
    networkURL(): string {
      const BASE_URL = 'https://github.com';

      const { shareOptions } = this;
      const {
        username, repository, type,
      } = shareOptions;

      switch (type) {
        case GITHUB_LINK_TYPES.fork:
          return `${BASE_URL}/${username}/${repository}/fork`;
        case GITHUB_LINK_TYPES.star:
          return `${BASE_URL}/${username}/${repository}/stargazers`;
        case GITHUB_LINK_TYPES.watch:
          return `${BASE_URL}/${username}/${repository}/watchers`;
        case GITHUB_LINK_TYPES.sponsor:
          return `${BASE_URL}/sponsors/${username}`;
        case GITHUB_LINK_TYPES.follow:
          return `${BASE_URL}/${username}?tab=followers`;
        default:
          return `${BASE_URL}${username}`;
      }
    },
  },

  render(h: CreateElement): VNode {
    return this.generateComponent(h, this.networkURL, 'GitHub');
  },
});
