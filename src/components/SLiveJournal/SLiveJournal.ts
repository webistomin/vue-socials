/**
 * Hey!
 *
 * SLiveJournal component used for LiveJournal social network
 * @link https://www.livejournal.com/
 */

import { VNode, defineComponent } from 'vue';
import BaseSocial from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 * @link https://www.livejournal.com/developer/extshare
 */
export interface ISLiveJournalShareOptions {
  url: string;
  subject?: string;
}

export default /* #__PURE__ */ defineComponent({
  name: 'SLiveJournal',

  mixins: [BaseSocial<ISLiveJournalShareOptions>(
    'LiveJournal',
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'http://www.livejournal.com/update.bml';
      const { shareOptions } = this;
      const { subject, url } = shareOptions;

      const serialisedParams = getSerialisedParams({
        event: url,
        subject,
      });

      return `${BASE_URL}${serialisedParams}`;
    },
  },

  render(): VNode {
    return this.generateComponent(this.networkURL);
  },
});
