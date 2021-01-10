/**
 * Hey!
 *
 * SGithub component used for GitHub social network
 * @link https://github.com/
 * @example https://github.com/webistomin/
 */

import Vue, {
  CreateElement, VNode, VueConstructor,
} from 'vue';
import BaseSocial, { TBaseSocialMixin } from '@/mixins/BaseSocial/BaseSocial';

const GITHUB_LINK_TYPES = {
  sponsor: 'sponsor',
  follow: 'follow',
  profile: 'profile',
};

export type TSGithubLinkType = typeof GITHUB_LINK_TYPES[keyof typeof GITHUB_LINK_TYPES];

/**
 * Share parameters for link
 */
export interface ISGithubShareOptions {
  username: string;
  type: TSGithubLinkType;
}

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<TBaseSocialMixin<ISGithubShareOptions>>>).extend({
  name: 'SGithub',

  mixins: [BaseSocial<ISGithubShareOptions>(
    'GitHub',
    {
      width: 900,
      height: 600,
    },
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'https://github.com/';

      const { shareOptions } = this;
      const {
        username, type,
      } = shareOptions;

      switch (type) {
        case GITHUB_LINK_TYPES.sponsor:
          return `${BASE_URL}sponsors/${username}`;
        case GITHUB_LINK_TYPES.follow:
          return `${BASE_URL}${username}?tab=followers`;
        case GITHUB_LINK_TYPES.profile:
        default:
          return `${BASE_URL}${username}`;
      }
    },

    ariaLabel() {
      const { shareOptions } = this;
      const {
        username, type,
      } = shareOptions;

      switch (type) {
        case GITHUB_LINK_TYPES.sponsor:
          return `Sponsor ${username} on GitHub.`;
        case GITHUB_LINK_TYPES.follow:
          return `Follow ${username} on GitHub.`;
        case GITHUB_LINK_TYPES.profile:
        default:
          return `Watch ${username} on GitHub.`;
      }
    },
  },

  render(h: CreateElement): VNode {
    return this.generateComponent(h, this.networkURL);
  },
});
