import store from 'store';
import { darkIcon, lightIcon, coolIcon } from '../../assets/images';

export type ThemeType = typeof dark;

// TODO chart palette
// add href color
export const dark = {
  primary: '#071b2ad6',
  secondary: '#03131dd4',
  navColor: '#03131d',
  buttons: '#8ec6e5',
  hover: '#45e1f5',
  active: '#45e1f5',
  companyLogo: '-webkit-linear-gradient(#00cecc,#204d3e)',
  text: '#fff;',
  navText: '#9dadb7',
  input: '#133B5C',
  placeholder: '#849bab',
  border: '#2a6591',
  error: '#be4545',
  link: '#00e7ef',
  shadow: '#27909a73',
};

export const light = {
  primary: '#fffffff0',
  secondary: '#fff',
  navColor: '#fff',
  buttons: '#22caac',
  hover: '#138d71',
  active: '#138d71',
  companyLogo: '-webkit-linear-gradient(#22caac,#065b40);',
  text: '#0F4C75',
  navText: ' #495567',
  input: '#fff',
  placeholder: '#849bab',
  border: '#2a6591',
  error: '#ad2525',
  link: '#0052c5',
  shadow: '#90959573',
};

export const cool = {
  primary: '#0000',
  secondary:
    'linear-gradient(0deg,rgb(17 120 117 / 78%) 0%,rgba(43,106,152,0.8239670868347339) 35%,rgba(101,17,75,0.8436029411764706) 100%)',
  navColor: 'linear-gradient(0deg, rgba(101,17,75,1) 0%, rgba(33,11,57,0.9136029411764706) 100%)',
  buttons: '#1cc6c1',
  hover: '#12cdff',
  active: '#12cdff',
  companyLogo: '-webkit-linear-gradient(#a62aad,rgb(18 205 192))',
  text: '#f5faff',
  navText: '#6d56a0',
  input: '#2d7488',
  placeholder: '#1cc6c1',
  border: '#2a6591',
  error: '#f99292',
  link: '#27b1ff',
  shadow: '#2097d2',
};

export const themes = {
  dark,
  light,
  cool,
};

export type themeDataType = {
  icon: string;
  name: keyof typeof themes;
};

export const themeData: themeDataType[] = [
  { icon: darkIcon, name: 'dark' },
  { icon: lightIcon, name: 'light' },
  { icon: coolIcon, name: 'cool' },
];

export const OSTheme =
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

export const savedTheme: keyof typeof themes = store.get('theme')?.value;
