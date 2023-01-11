/**
 * Hey!
 *
 * SGithubCount component used for GitHub social network
 * @link https://github.com/
 */

import { defineComponent } from 'vue';
import JSONP from '@/utils/jsonp';
import BaseCount from '@/mixins/BaseCount/BaseCount';

const GITHUB_LINK_TYPES = {
  follow: 'follow',
};

export type TSGithubCountLinkType = typeof GITHUB_LINK_TYPES[keyof typeof GITHUB_LINK_TYPES];

export interface ISGithubCountErrorResponse {
  documentation_url: string;
  message: string;
}

export interface ISGithubCountSuccessResponse {
  login: string,
  id: number,
  node_id: string,
  avatar_url: string,
  gravatar_id: string,
  url: string,
  html_url: string,
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string,
  site_admin: boolean,
  name: string,
  company: string,
  blog: string,
  location: string,
  email: null,
  hireable: null,
  bio: string,
  twitter_username: null,
  public_repos: number,
  public_gists: number,
  followers: number,
  following: number,
  created_at: string,
  updated_at: string
}

export interface ISGithubCountResult {
  meta: {
    'Content-Type': string;
    'Cache-Control': string;
    Vary: string;
    ETag: string;
    'Last-Modified': string;
    'X-GitHub-Media-Type': string;
    status: number;
    'X-RateLimit-Limit': string;
    'X-RateLimit-Remaining': string;
    'X-RateLimit-Reset': string;
    'X-RateLimit-Used': string;
  };
  data: ISGithubCountSuccessResponse | ISGithubCountErrorResponse
}

/**
 * Share parameters for link
 */
export interface ISGithubCountShareOptions {
  username: string;
  type: TSGithubCountLinkType;
}

export default /* #__PURE__ */ defineComponent({
  name: 'SGithubCount',

  mixins: [BaseCount<ISGithubCountShareOptions, ISGithubCountResult>(
    'GitHub',
    {} as ISGithubCountShareOptions,
    true,
    '@c followers on @s.',
  )],

  methods: {
    handleGithubResponse(data: ISGithubCountResult): void {
      this.handleResult(data);

      if ('followers' in data.data) {
        this.handleCount(data.data.followers);
      }
    },
  },

  mounted() {
    const { shareOptions } = this;
    const {
      username,
      type,
    } = shareOptions;
    const BASE_URL = 'https://api.github.com/';
    let finalURL;

    switch (type) {
      case GITHUB_LINK_TYPES.follow:
      default:
        finalURL = `${BASE_URL}users/${username}`;
    }

    this.handleLoading(true);

    JSONP<ISGithubCountResult>(finalURL, (err, data) => {
      this.handleLoading(false);

      if (data) {
        this.handleGithubResponse(data);
      }

      if (err) {
        this.handleError(err);
      }
    });
  },
});
