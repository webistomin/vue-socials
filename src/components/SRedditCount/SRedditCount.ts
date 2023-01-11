/**
 * Hey!
 *
 * SRedditCount component used for Reddit social network
 * @link https://www.reddit.com/
 */

import { defineComponent } from 'vue';
import getSerialisedParams from '@/utils/getSerialisedParams';
import BaseCount from '@/mixins/BaseCount/BaseCount';
import JSONP from '@/utils/jsonp';

/**
 * Share parameters for link
 */
export interface ISRedditCountShareOptions {
  url: string;
}

export interface ISRedditResultChildren {
  kind: string;
  data: {
    all_awardings: unknown[],
    allow_live_comments: boolean
    approved_at_utc: unknown
    approved_by: unknown
    archived: boolean
    author: string
    author_flair_background_color: unknown
    author_flair_css_class: unknown
    author_flair_richtext: unknown
    author_flair_template_id: unknown
    author_flair_text: unknown
    author_flair_text_color: unknown
    author_flair_type: string;
    author_fullname: string;
    author_patreon_flair: boolean
    author_premium: boolean
    awarders: unknown
    banned_at_utc: unknown
    banned_by: unknown
    can_gild: boolean
    can_mod_post: boolean
    category: unknown
    clicked: boolean
    content_categories: unknown
    contest_mode: boolean
    created: DOMTimeStamp
    created_utc: DOMTimeStamp
    discussion_type: unknown
    distinguished: unknown
    domain: string
    downs: number
    edited: boolean
    gilded: number
    gildings: unknown
    hidden: boolean
    hide_score: boolean
    id: string
    is_crosspostable: boolean
    is_meta: boolean
    is_original_content: boolean
    is_reddit_media_domain: boolean
    is_robot_indexable: boolean
    is_self: boolean
    is_video: boolean
    likes: unknown
    link_flair_background_color: string
    link_flair_css_class: unknown
    link_flair_richtext: unknown
    link_flair_text: unknown
    link_flair_text_color: string
    link_flair_type: string
    locked: boolean
    media: unknown
    media_embed: unknown
    media_only: boolean
    mod_note: unknown
    mod_reason_by: unknown
    mod_reason_title: unknown
    mod_reports: unknown
    name: string
    no_follow: boolean
    num_comments: number
    num_crossposts: number
    num_reports: unknown
    over_18: boolean
    parent_whitelist_status: unknown
    permalink: string
    pinned: boolean
    post_hint: string
    preview: unknown
    pwls: unknown
    quarantine: boolean
    removal_reason: unknown
    removed_by: unknown
    removed_by_category: unknown
    report_reasons: unknown
    saved: boolean
    score: number
    secure_media: unknown
    secure_media_embed: unknown
    selftext: string
    selftext_html: unknown
    send_replies: boolean
    spoiler: boolean
    stickied: boolean
    subreddit: string
    subreddit_id: string
    subreddit_name_prefixed: string
    subreddit_subscribers: number
    subreddit_type: string
    suggested_sort: string
    thumbnail: string
    thumbnail_height: number
    thumbnail_width: number
    title: string
    top_awarded_type: unknown
    total_awards_received: number
    treatment_tags: unknown
    ups: number
    upvote_ratio: number
    url: string
    url_overridden_by_dest: string
    user_reports: unknown
    view_count: unknown
    visited: boolean
    whitelist_status: unknown
    wls: unknown
  }
}

export interface ISRedditResult {
  data: {
    after: unknown,
    before: unknown,
    children: ISRedditResultChildren[]
  },
  kind: string;
}

export default /* #__PURE__ */ defineComponent({
  name: 'SRedditCount',

  mixins: [BaseCount<ISRedditCountShareOptions, ISRedditResult>(
    'Reddit',
  )],

  methods: {
    handleRedditResponse(data: ISRedditResult): void {
      this.handleResult(data);

      this.handleCount(data?.data?.children?.[0]?.data.score);
    },
  },

  mounted() {
    const { shareOptions } = this;
    const { url } = shareOptions;
    const BASE_URL = 'https://www.reddit.com/api/info.json';

    const finalURL = `${BASE_URL}${getSerialisedParams({
      limit: 1,
      url,
    })}`;

    this.handleLoading(true);

    JSONP<ISRedditResult>(finalURL, (err, data) => {
      this.handleLoading(false);

      if (err) {
        this.handleError(err);
      }

      if (data) {
        this.handleRedditResponse(data);
      }
    }, 'jsonp');
  },
});
