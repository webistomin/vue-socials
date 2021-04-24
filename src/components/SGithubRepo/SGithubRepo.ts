/**
 * Hey!
 *
 * SGithubRepo component used for GitHub social network
 * @link https://github.com/
 */

import { VNode, defineComponent } from 'vue';
import BaseSocial from '@/mixins/BaseSocial/BaseSocial';

const GITHUB_LINK_TYPES = {
  repo: 'repo',
  watch: 'watch',
  star: 'star',
  fork: 'fork',
  download: 'download',
  issue: 'issue',
  pr: 'pr',
  template: 'template',
};

export type TSGithubLinkType = typeof GITHUB_LINK_TYPES[keyof typeof GITHUB_LINK_TYPES];

/**
 * Share parameters for link
 */
export interface ISGithubRepoShareOptions {
  username: string;
  repository: string;
  type: TSGithubLinkType;
}

export default /* #__PURE__ */ defineComponent({
  name: 'SGithubRepo',

  mixins: [BaseSocial<ISGithubRepoShareOptions>(
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
      const { username, repository, type } = shareOptions;

      switch (type) {
        case GITHUB_LINK_TYPES.watch:
          return `${BASE_URL}${username}/${repository}/subscription`;
        case GITHUB_LINK_TYPES.fork:
          return `${BASE_URL}${username}/${repository}/fork`;
        case GITHUB_LINK_TYPES.star:
          return `${BASE_URL}${username}/${repository}/stargazers`;
        case GITHUB_LINK_TYPES.issue:
          return `${BASE_URL}${username}/${repository}/issues/new`;
        case GITHUB_LINK_TYPES.pr:
          return `${BASE_URL}${username}/${repository}/compare`;
        case GITHUB_LINK_TYPES.download:
          return `${BASE_URL}${username}/${repository}/archive/master.zip`;
        case GITHUB_LINK_TYPES.template:
          return `${BASE_URL}${username}/${repository}/generate`;
        case GITHUB_LINK_TYPES.repo:
        default:
          return `${BASE_URL}${username}/${repository}`;
      }
    },

    ariaLabel(): string {
      const { shareOptions } = this;
      const { username, repository, type } = shareOptions;

      switch (type) {
        case GITHUB_LINK_TYPES.watch:
          return `Watch ${username}/${repository} on GitHub`;
        case GITHUB_LINK_TYPES.fork:
          return `Fork ${username}/${repository} on GitHub`;
        case GITHUB_LINK_TYPES.star:
          return `Give a star to ${username}/${repository} on GitHub`;
        case GITHUB_LINK_TYPES.issue:
          return `Raise a new issue on ${username}/${repository} on GitHub`;
        case GITHUB_LINK_TYPES.pr:
          return `Raise a new pull request ${username}/${repository} on GitHub`;
        case GITHUB_LINK_TYPES.download:
          return `Download ${username}/${repository} from GitHub`;
        case GITHUB_LINK_TYPES.template:
          return `Generate a new repository from ${username}/${repository} on GitHub`;
        case GITHUB_LINK_TYPES.repo:
        default:
          return `Watch ${username}/${repository} on GitHub`;
      }
    },
  },

  render(): VNode {
    return this.generateComponent(this.networkURL);
  },
});
