/**
 * Hey!
 *
 * SGithubGistCount component used for Github Gists social network
 * @link https://gist.github.com/
 */

import { defineComponent } from 'vue';
import BaseCount from '@/mixins/BaseCount/BaseCount';
import JSONP from '@/utils/jsonp';

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

export interface ISGithubGistCountSuccessResponse {
  comments: 0;
  comments_url: string;
  commits_url: string;
  created_at: string;
  description: string;
  files: Record<string, unknown>;
  forks_url: string;
  git_pull_url: string;
  git_push_url: string;
  history: {
    committed_at: string;
    url: string;
    user: {
      avatar_url: string;
      events_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      gravatar_id: string;
      html_url: string;
      id: number;
      login: string;
      node_id: string;
      organizations_url: string;
      received_events_url: string;
      repos_url: string;
      site_admin: boolean;
      starred_url: string;
      subscriptions_url: string;
      type: string;
      url: string;
    }
    version: string;
  }[];
  html_url: string;
  id: string;
  node_id: string;
  owner: {
    avatar_url: string;
    events_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    gravatar_id: string;
    html_url: string;
    id: number;
    login: string;
    node_id: string;
    organizations_url: string;
    received_events_url: string;
    repos_url: string;
    site_admin: boolean;
    starred_url: string;
    subscriptions_url: string;
    type: string;
    url: string;
  }
  public: boolean;
  truncated: boolean;
  updated_at: string;
  url: string;
  user: unknown;
  forks: unknown[]
}

export interface ISGithubGistCountErrorResponse {
  documentation_url: string;
  message: string;
}

export interface SGithubGistCountResult {
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
  data: ISGithubGistCountSuccessResponse | ISGithubGistCountErrorResponse;
}

export default /* #__PURE__ */ defineComponent({
  name: 'SGithubGistCount',

  methods: {
    handleGithubResponse(data: SGithubGistCountResult): void {
      const { shareOptions } = this;
      const { type } = shareOptions;
      this.handleResult(data);
      let count;

      switch (type) {
        default:
        case GITHUB_LINK_TYPES.fork:
          if ('forks' in data.data) {
            count = data.data.forks.length;
          }
          break;
      }

      this.handleCount(count);
    },
  },

  mixins: [BaseCount<ISGithubGistCountShareOptions, SGithubGistCountResult>(
    'GithubGist',
  )],

  mounted() {
    const { shareOptions } = this;
    const { gistId } = shareOptions;
    const BASE_URL = 'https://api.github.com/';

    const finalURL = `${BASE_URL}gists/${gistId}`;

    this.handleLoading(true);

    JSONP<SGithubGistCountResult>(finalURL, (err, data) => {
      this.handleLoading(false);

      if (err) {
        this.handleError(err);
      }

      if (data) {
        this.handleGithubResponse(data);
      }
    });
  },
});
