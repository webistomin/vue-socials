import Vue, {
  CreateElement, PropOptions, VNode,
} from 'vue';
import JSONP from '@/utils/jsonp';
import getSerialisedParams from '@/utils/getSerialisedParams';

export interface ISFbCountResult {
  engagement?: {
    reaction_count: number;
    comment_count: number;
    share_count: number;
    comment_plugin_count: number;
  }
  og_object?: {
    description: string;
    id: string;
    title: string;
    type: string;
    updated_time: string;
  }
  app_links?: unknown;
}

export interface ISFbCountError {
  error: {
    message: string;
    type: string;
    is_transient?: boolean;
    code: number;
    fbtrace_id: string;
  }
}

export interface ISFbCountShareOptions {
  url: string;
  accessToken: string;
  fields?: string[];
  scopes?: string[];
}

export default /* #__PURE__ */ Vue.extend({
  data() : {
    count: number | undefined,
  } {
    return {
      count: undefined,
    };
  },

  props: {
    /**
     * @link https://developers.facebook.com/docs/graph-api/reference/v9.0/url
     */
    shareOptions: {
      type: Object,
      required: true,
    } as PropOptions<ISFbCountShareOptions>,
  },

  mounted() {
    const BASE_URL = 'https://graph.facebook.com/';
    const { shareOptions } = this;
    const {
      url, accessToken, fields, scopes,
    } = shareOptions;

    const finalURL = `${BASE_URL}${getSerialisedParams({
      access_token: accessToken,
      fields: Array.isArray(fields) ? fields.join(',') : undefined,
      scopes: Array.isArray(scopes) ? scopes.join(',') : undefined,
      url,
    })}`;

    JSONP<ISFbCountResult | ISFbCountError>(finalURL, (_err, data) => {
      if (data && 'engagement' in data) {
        this.saveCount(data.engagement!.share_count);
      }
    });
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
