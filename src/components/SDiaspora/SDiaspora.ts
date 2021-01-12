/**
 * Hey!
 *
 * SDiaspora component used for DiasporaFoundation social network
 * @link https://diasporafoundation.org/
 * @example https://share.diasporafoundation.org/?url=https%3A%2F%2Fgithub.com%2F&title=Title/
 */

import Vue, {
  CreateElement, VNode, VueConstructor,
} from 'vue';
import BaseSocial, { TBaseSocialMixin } from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 * @link https://share.diasporafoundation.org/about.html
 * @link https://wiki.diasporafoundation.org/FAQ_for_web_developers
 */
export interface ISDiasporaShareOptions {
  url: string;
  title: string;
}

export type TSDiasporaShareOptionsUrl = Omit<ISDiasporaShareOptions, 'url'>;
export type TSDiasporaShareOptionsTitle = Omit<ISDiasporaShareOptions, 'title'>;

export type TSDiasporaShareOptions = TSDiasporaShareOptionsUrl | TSDiasporaShareOptionsTitle;

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<TBaseSocialMixin<ISDiasporaShareOptions>>>).extend({
  name: 'SDiaspora',

  mixins: [BaseSocial<TSDiasporaShareOptions>(
    'Diaspora',
    {
      width: 600,
      height: 540,
    },
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'https://share.diasporafoundation.org';
      const { shareOptions } = this;
      const { url, title } = shareOptions;

      const serialisedParams = getSerialisedParams({
        url,
        title,
      });

      return `${BASE_URL}${serialisedParams}`;
    },
  },

  render(h: CreateElement): VNode {
    return this.generateComponent(h, this.networkURL);
  },
});
