/**
 * Hey!
 *
 * SMicrosoftTeams component used for MicrosoftTeams social network
 * @link https://www.microsoft.com/en/microsoft-365/microsoft-teams/group-chat-software
 */

import Vue, {
  CreateElement, VNode, VueConstructor,
} from 'vue';
import BaseSocial, { TBaseSocialMixin } from '@/mixins/BaseSocial/BaseSocial';
import getSerialisedParams from '@/utils/getSerialisedParams';

/**
 * Share parameters for link
 * @link https://docs.microsoft.com/en-us/microsoftteams/platform/concepts/build-and-test/share-to-teams
 */
export interface ISMicrosoftTeamsShareOptions {
  url: string;
  preview?: boolean;
  text?: string;
  instruction?: string;
  title?: string;
}

export default /* #__PURE__ */ (Vue as VueConstructor<Vue & InstanceType<TBaseSocialMixin<ISMicrosoftTeamsShareOptions>>>).extend({
  name: 'SMicrosoftTeams',

  mixins: [BaseSocial<ISMicrosoftTeamsShareOptions>(
    'MicrosoftTeams',
  )],

  computed: {
    networkURL(): string {
      const BASE_URL = 'https://teams.microsoft.com/share';
      const { shareOptions } = this;
      const {
        url, preview, text, instruction, title,
      } = shareOptions;

      const serialisedParams = getSerialisedParams({
        href: url,
        preview,
        assignTitle: title,
        msgText: text,
        assignInstr: instruction,
      });

      return `${BASE_URL}${serialisedParams}`;
    },
  },

  render(h: CreateElement): VNode {
    return this.generateComponent(h, this.networkURL);
  },
});
