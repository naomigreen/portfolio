import store from 'store'

export type ThemeType = typeof dark;

export const dark = {
  primary: '#0e1b29',
  secondary: '#131f2c',
  text: '#89aad1',
  navText: '#89aad1',
  navBackground: '#1b2834ed',
  navShadow: '0px 4px 16px 0px rgb(6 6 6)',
  headerShadow: '0px 4px 16px 0px rgb(0 0 0)',
  contentShadow: '0px 4px 21px 0px rgb(0 0 0)',
  companyLogo: 'linear-gradient(167deg, rgb(133 165 203) 0%, rgb(137 170 209) 25%, rgb(138 154 185) 50%, rgb(137 170 209) 75%, rgb(133 165 203) 100%)',
  divider: 'linear-gradient(to right, #111216, #5f7fae, #111216)',
  placeholder: '#696969',
  input: '#1c3956',
  border: '#363737',
  error: '#ad2828',
  success: '#20b089',
  errorBackground: '#530d0d98',
  successBackground: '#13828098',
  buttons: '#1c3956',
  hover: '#214467',
  active: '#747476',
  link: '#7ca7eb',
};

export const light = {
  primary: '#e7e0d0',
  secondary: '#ebe7db',
  text: '#53565b',
  navText: '#53565b',
  navBackground: '#e9e3d5d6',
  navShadow: '0px 4px 16px 0px rgb(93 92 91)',
  headerShadow: '0px 4px 16px 0px rgb(121 122 121)',
  contentShadow: '0px 4px 21px 0px rgb(192 183 168)',
  companyLogo: 'linear-gradient(167deg, rgb(50 62 74) 0%, rgb(105 109 110) 25%, rgb(209 202 189) 50%, rgb(105 109 110) 75%, rgb(50 62 74) 100%)',
  divider: 'linear-gradient(to right, #f5efe3, #bc9365, #f5efe3)',
  placeholder: '#747476',
  input: '#fff',
  border: '#cec9bf',
  error: '#e25757',
  success: '#1cb088',
  errorBackground: '#f2929298',
  successBackground: '#8af9bd98',
  buttons: '#f6f1e2',
  hover: '#eddba7',
  active: '#138d71',
  link: '#0052c5',
};

export const cool = {
  primary: '#0e202b',
  secondary: 'linear-gradient(0deg, rgba(17, 120, 117, 0.78) 0%, rgba(43, 106, 152, 0.824) 35%, rgba(101, 17, 75, 0.843) 100%)',
  text: '#77f9ff',
  navText: '#e459ff',
  navBackground: '#280826c4',
  navShadow: '0px 4px 16px 0px rgb(113 41 61)',
  headerShadow: '0px 4px 16px 0px rgb(2 72 85)',
  contentShadow: '0px 4px 21px 0px rgb(16 106 110)',
  companyLogo: 'linear-gradient(167deg, rgb(46 247 253) 0%, rgb(34 243 232) 25%, rgb(222 108 222) 50%, rgb(46 247 253) 75%, rgb(34 243 232) 100%)',
  divider: 'linear-gradient(to right, #242646, #7e13a1, #242646)',
  placeholder: '#1cc6c1',
  input: '#2d7488',
  border: '#2a6591',
  error: '#d30c6c',
  success: '#20b089',
  errorBackground: '#9c164998',
  successBackground: '#b164b598',
  buttons: '#22aaa6',
  hover: '#154e5d',
  active: '#12cdff',
  link: '#27b1ff',
};

export const themes = {
  dark,
  light,
  cool,
};

export type themeDataType = {
  icon: string
  background: string
  name: keyof typeof themes
};

export const themeData: themeDataType[] = [
  { icon: '/icons/moon.png', background: '/backgrounds/dark3.jpg', name: 'dark' },
  { icon: '/icons/sun.png', background: '/backgrounds/light.jpg', name: 'light' },
  { icon: '/icons/cool.png', background: '/backgrounds/cool.jpg', name: 'cool' },
];

export const OSTheme =
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';


export const savedTheme: keyof typeof themes = store.get('theme')?.value;
