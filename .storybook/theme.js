// eslint-disable-next-line import/no-extraneous-dependencies
import { create } from '@storybook/theming/create';
import logo from '../assets/logo.svg';

export default create({
  base: 'light',
  brandTitle: 'VueSocials',
  brandImage: logo,
});
