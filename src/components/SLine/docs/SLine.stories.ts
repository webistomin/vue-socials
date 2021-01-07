import { Story } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import SLine from '../SLine';

export default {
  title: 'Share/SLine',
  component: SLine,
};

const Template: Story = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SLine },
  methods: {
    onClose: action('emit close'),
    onOpen: action('emit open'),
    onBlock: action('emit block'),
    onFocus: action('emit focus'),
  },
  template: `
    <s-line
      class="base-social"
      v-bind="$props"
      @popup-close="onClose"
      @popup-open="onOpen"
      @popup-block="onBlock"
      @popup-focus="onFocus"
    >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 299.99998 300.00833">
      <defs/>
      <defs>
        <clipPath id="a" clipPathUnits="userSpaceOnUse">
          <path d="M0 595.28h841.89V0H0v595.28z"/>
        </clipPath>
      </defs>
      <g clip-path="url(#a)" transform="matrix(1.25 0 0 -1.25 -424.5206 605.65166)">
        <path fill="#000000" d="M535.69699 483.72129H383.86874665c-23.83932712.03161494-43.4172934-19.27346451-43.45223623-43.1194474V288.77359923c-.02995099-23.84764684 19.2767924-43.42727706 43.11944741-43.458892h151.8299073c23.84431895-.029951 43.4139655 19.27346451 43.45057228 43.12443924v151.8299073c.03327888 23.84764683-19.27013662 43.41895734-43.11944741 43.45223622"/>
        <path fill="#fff" d="M546.02809 375.00068c0 38.83978318-38.93629194 70.43808164-86.79964398 70.43808164-47.85669626 0-86.79798003-31.59829846-86.79798003-70.43808164 0-34.81969424 30.8794746-63.98031459 72.5912253-69.49462534 2.82704103-.60900354 6.6740798-1.86361739 7.6474871-4.27966422.87523459-2.19474227.57239676-5.63245078.2795426-7.84882432 0 0-1.01833379-6.12497823-1.23797441-7.4295104-.37771531-2.19474228-1.74381342-8.58262368 7.51769944-4.67901082 9.26484075 3.90361286 49.98820866 29.43350719 68.19841289 50.39421102h-.0033279C540.00294842 345.4573525 546.02809 359.45611422 546.02809 375.00068"/>
        <path fill="#000000" d="M441.5933 393.76931h-6.08837146c-.93347264 0-1.69223115-.75709457-1.69223115-1.68723932V354.2606213c0-.9318087.7587585-1.68723932 1.69223115-1.68723932H441.5933c.93347264 0 1.6905672.75543062 1.6905672 1.68723932v37.8214494c0 .93014474-.75709456 1.68723931-1.6905672 1.68723931M483.49956 393.76931h-6.08837146c-.93347264 0-1.6905672-.75709457-1.6905672-1.68723932v-22.46990112l-17.33164175 23.40670165c-.03993466.05990199-.08486115.11647609-.13145159.17138624l-.0116476.00998367c-.03327889.03827071-.06655777.0715496-.1015006.10482848-.00998366.00998366-.01996733.01830338-.03161493.02828705-.02828705.0266231-.05823805.05158226-.08985299.07487748-.01331155.01331155-.02828704.02329522-.04326254.03494283-.029951.01996733-.05823805.0415986-.08818904.05990198-.01663944.01164761-.03327888.02163128-.05158227.029951-.02995099.01830338-.05990198.03660677-.08985298.05158226-.01830338.00831973-.03494282.01830339-.0532462.02495917-.03161495.0149755-.06322988.02995099-.09650877.0415986-.01996733.00665578-.03660677.01331155-.05491015.01996733-.03327888.0116476-.06655777.02329522-.1015006.03161494-.01830338.00665577-.0382707.00998366-.05823804.01663944-.03327888.00665577-.06489382.0149755-.09650875.02163127-.02329522.00332789-.04825438.00665578-.0715496.00831972-.029951.00665578-.05990199.00831972-.08985298.01164761-.02828705.00332789-.0565741.00332789-.0865251.00499183-.02163127 0-.0382707.00332789-.05990198.00332789h-6.08670752c-.93347264 0-1.69223115-.75709457-1.69223115-1.68723932V354.2606213c0-.9318087.75875851-1.68723932 1.69223115-1.68723932h6.08670752c.93513658 0 1.69223115.75543062 1.69223115 1.68723932v22.46324535l17.35327302-23.43665265c.11980397-.1697223.267895-.30782966.42929757-.41764997.00499184-.00332789.01164761-.00831972.01663945-.01331155.03494282-.02163127.06988565-.04326255.10482847-.06322988.01663945-.00998366.03161494-.01663944.04825438-.02495916.02495916-.0149755.05324621-.02828705.07986932-.03993466.02828705-.0116476.05324621-.02329521.0831972-.03494282.01663945-.00665578.03327889-.01331156.04991833-.01830339.03993466-.0149755.07654143-.0266231.11481214-.03827071.00831972 0 .01663944-.00332789.02495916-.00499183.13810736-.03660677.2828705-.05823805.43262547-.05823805H483.49956c.93513658 0 1.6905672.75543062 1.6905672 1.68723932v37.8214494c0 .93014474-.75543062 1.68723931-1.6905672 1.68723931M426.91715 362.04388h-16.54293224v30.03585495c0 .93347264-.75709457 1.6905672-1.68890326 1.6905672h-6.09003541c-.93347264 0-1.6905672-.75709456-1.6905672-1.6905672V354.26161344c0-.45425674.1813699-.86525093.47256012-1.16808875.00665578-.00831972.01331155-.01663944.02329522-.02495917.00831972-.00831972.01663944-.0149755.02495916-.02329521.30450177-.29285416.71383202-.47256013 1.16808876-.47256013H426.91715c.93347264 0 1.68723932.75875851 1.68723932 1.69223115v6.08837146c0 .93347264-.75376668 1.69056721-1.68723932 1.69056721M517.12172 384.29914c.93347264 0 1.68723932.75543062 1.68723932 1.6905672v6.08837147c0 .93347264-.75376668 1.69223115-1.68723932 1.69223115H492.7965212c-.45592068 0-.86691487-.18303385-1.17141664-.47755196-.00665578-.00665578-.0149755-.0116476-.01996733-.01830338-.00998367-.00998367-.01830339-.01996733-.0266231-.029951-.28952628-.30283782-.46923225-.71216807-.46923225-1.16476087V354.26162111c0-.45425674.18136991-.86525094.47256013-1.16808876.00665578-.00831972.0149755-.01830339.02329522-.02495916.00665577-.00831972.01663944-.01663944.02495916-.02329522.30283782-.29119022.71383202-.47256012 1.16642481-.47256012H517.12172c.93347264 0 1.68723932.7587585 1.68723932 1.6905672v6.0900354c0 .9318087-.75376668 1.69056721-1.68723932 1.69056721h-16.5412683v6.39287323H517.12172c.93347264 0 1.68723932.75709457 1.68723932 1.69056721v6.08837146c0 .93347264-.75376668 1.69223115-1.68723932 1.69223115h-16.5412683V384.29914H517.12172z"/>
      </g>
    </svg>
    </s-line>
`,
});

export const Default = Template.bind({});
Default.args = {
  windowFeatures: {},
  shareOptions: {
    url: 'https://github.com/',
    text: 'Text',
  },
};