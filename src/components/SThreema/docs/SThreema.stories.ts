import { Story } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import SThreema from '../SThreema';

export default {
  title: 'Share/SThreema',
  component: SThreema,
};

const Template: Story = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SThreema },
  methods: {
    onClose: action('emit close'),
    onOpen: action('emit open'),
    onBlock: action('emit block'),
    onFocus: action('emit focus'),
  },
  template: `
    <s-threema
      class="base-social"
      v-bind="$props"
      @popup-close="onClose"
      @popup-open="onOpen"
      @popup-block="onBlock"
      @popup-focus="onFocus"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="24" viewBox="0 0 993 183">
        <path fill="#000" fill-rule="nonzero" d="M884.89286 46.215c36.3825 0 55.1232 18.376875 55.49437 44.942486l.00563.807514v86.25h-29.25v-13.25c-7.75 10.75-21.5 17.5-41.25 17.5-24.25 0-45.75-10.5-45.75-36.5 0-29.205 25.72762-39.543075 54.38085-44.840986L909.39286 95.465v-3c0-12.5-9.25-19.5-24-19.5-16.29311 0-25.2182 6.934602-37.06508 18.180911L845.64286 93.715l-20.5-18.75c16-19 34.5-28.75 59.75-28.75zm-458.471431 0c39 0 59.75 24.5 59.75 63.75l-.008324 1.349928c-.041751 3.593155-.234476 8.15825-.439081 10.774283l-.052595.625789h-91.75c2.75 18.5 13.75 32 36 32 14.810126 0 22.796346-4.874219 37.433716-17.028917l.566284-.471083 18.25 20c-18.75 19-36.25 25-57 25-41.25 0-67-26.5-67-67.25 0-39.5 24-68.75 64.25-68.75zm131.657143 0c39 0 59.75 24.5 59.75 63.75l-.003486.854402-.019704 1.488623c-.061827 3.412941-.238653 7.414568-.425168 9.793358l-.051642.613617h-91.75c2.75 18.5 13.75 32 36 32 14.810126 0 22.796346-4.874219 37.433716-17.028917l.566284-.471083 18.25 20c-18.75 19-36.25 25-57 25-41.25 0-67-26.5-67-67.25 0-39.5 24-68.75 64.25-68.75zm212.407138 0c27.225 0 42.19875 16.416675 42.49551 41.972783l.00449.777217v89.25h-32.5v-79.5c0-14.25-5.5-24.5-20.25-24.5-14.6025 0-22.3443 10.7811-22.49767 25.066058l-.00233.433942v78.5h-32.5v-79.5c0-14.25-5.25-24.5-20.25-24.5-14.6025 0-22.3443 11.026125-22.49767 25.073408l-.00233.426592v78.5h-32.499996V50.465h30.249996v14.25c6.75-11 18.5-18.5 36.5-18.5 16.75 0 28.75 7 35.5 18.75 7.5-10.75 19.5-18.75 38.25-18.75zM142.95.715v30h-53.5v147.5h-35v-147.5H.95v-30h142zm42.907143 0v61.25c8-9.75 20.25-15.75 36.25-15.75 29.4525 0 45.428625 18.13185 45.745202 43.722261l.004798.777739v87.5h-32.5v-77.75c0-16.75-8.25-26.25-23.75-26.25-14.85 0-25.534575 10.7811-25.746782 26.521506l-.003218.478494v77h-32.5V.715h32.5zm159.157143 48c6.75 0 12.570153 1.39477 19.477894 3.511833l.772106.238167-5.75 28.5c-6.75-1.75-12-2.5-16.25-2.5-17.0775 0-27.78435 13.476375-27.99678 36.06278l-.00322.68722v63h-32.5V50.465h30.25v18.75c6-12.25 16.25-20.5 32-20.5zM992.05 141.965v36.25h-35.5v-36.25h35.5zm-82.65714-23.25l-22.64715 4.740656-1.10879.237331c-17.98387 3.890174-29.74406 8.497213-29.74406 20.022013 0 8 7.25 12.75 19.5 12.75 16.335 0 33.6501-7.8408 33.99477-29.586769l.00523-.663231v-7.5zm-483.971431-47c-17.0775 0-27.049275 11.026125-30.64305 27.256581l-.10695.493419h59.75c-1.25-17-11.25-27.75-29-27.75zm131.657143 0c-17.0775 0-27.049275 11.026125-30.64305 27.256581l-.10695.493419h59.75c-1.25-17-11.25-27.75-29-27.75z"/>
      </svg>
    </s-threema>
`,
});

export const Default = Template.bind({});
Default.args = {
  windowFeatures: {},
  shareOptions: {
    url: 'https://github.com/',
    id: '',
  },
};
