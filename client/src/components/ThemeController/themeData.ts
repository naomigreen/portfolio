import store from 'store'

export const chartThemes = {
  dark: ['#24adc5', '#ba8ad2', '#216c7b', '#a167d6', '#2e8b6a', '#e06a68', '#4c608a', '#aa3884', '#a2211f', '#2283b9', '#ffafcc'],
  light: ['#9b9b7a', '#d9ae94', '#edd392', '#f6acb1', '#d3783c', '#997b66', '#f77976', '#d29dc0', '#d17690', '#5c7e90', '#9bb589'],
  cool: ['#bf1987', '#f77976', '#aa00ff', '#ffab00', '#455eec', '#a0e426', '#b49c2e', '	#02bc72', '#e2dc16', '#f82c2c', '#16e7e4'],
  fairy: ['#dc7bbc', '#b68bcb', '#f59997', '#2fa8cd', '#8795e6', '#dd6565', '#5aa988', '#0b9ea9', '#509aef', '#b570ce', '#f282de',],
}

export type ThemeType = typeof dark;

export const dark = {
  primary: '#0e1b29f7',
  secondary: '#0e1b29c7',
  text: '#89aad1',
  navText: '#89aad1',
  navBackground: '#1b2834ed',
  navShadow: '0px 4px 16px 0px rgb(6 6 6)',
  headerShadow: '0px 4px 16px 0px rgb(0 0 0)',
  contentShadow: '0px 4px 21px 0px rgb(0 0 0)',
  companyLogo: 'linear-gradient(167deg, rgb(133 165 203) 0%, rgb(133 165 203) 100%)',
  companyIcon: '#bcd8ff',
  divider: 'linear-gradient(0deg, rgb(108 133 156) 21%, rgb(188 216 255) 100%)',
  placeholder: '#696969',
  input: '#1c3956',
  border: '#363737',
  error: '#ad2828',
  success: '#20b089',
  errorBackground: '#530d0d98',
  successBackground: '#13828098',
  buttons: 'linear-gradient(0deg, rgb(18 37 57) 0%, rgb(40 79 118) 100%)',
  hover: 'linear-gradient(0deg, rgb(15 41 49) 0%, rgb(133 165 203) 100%)',
  active: '#747476',
  link: '#7ca7eb',
  tooltipText: '#131f2c',
  tooltipBackground: '#89aad1',
  cardBackground: '#131f2ce3',
  cardBorder: '#324962',
  cardHeaderColour: '#32558a',
  logoBackground: '#122539',
  bannerColour: '#27425f',
};

export const light = {
  primary: '#fffbf3',
  secondary: '#fcfbf9',
  text: '#53565b',
  navText: '#53565b',
  navBackground: '#f8f6eecc',
  navShadow: '0px 4px 16px 0px rgb(93 92 91)',
  headerShadow: '0px 4px 16px 0px rgb(121 122 121)',
  contentShadow: '0px 4px 21px 0px rgb(192 183 168)',
  companyLogo: 'linear-gradient(167deg, rgb(50 62 74) 0%, rgb(105 109 110) 25%, rgb(209 202 189) 50%, rgb(105 109 110) 75%, rgb(50 62 74) 100%)',
  companyIcon: '#c6c1b3',
  divider: 'linear-gradient(to right, #f5efe3, #bc9365, #f5efe3)',
  placeholder: '#747476',
  input: '#fff',
  border: '#cec9bf',
  error: '#e25757',
  success: '#1cb088',
  errorBackground: '#f2929298',
  successBackground: '#8af9bd98',
  buttons: 'linear-gradient(0deg, rgb(196 192 181) 0%, rgb(235 231 219) 100%)',
  hover: 'linear-gradient(0deg, rgb(154 150 141) 0%, rgb(235 231 219) 100%)',
  active: '#138d71',
  link: '#0052c5',
  tooltipText: '#131f2c',
  tooltipBackground: '#89aad1',
  cardBackground: '#eee7ddc7',
  cardBorder: '#d2beb1',
  cardHeaderColour: '#f2e3d9',
  logoBackground: '#122539',
  bannerColour: '#fdf4dc',
};

export const cool = {
  primary: '#0a1319',
  secondary: 'linear-gradient(0deg, rgba(17, 120, 117, 0.78) 0%, rgba(43, 106, 152, 0.824) 35%, rgba(101, 17, 75, 0.843) 100%)',
  text: '#77f9ff',
  navText: '#e959e1',
  navBackground: '#090828c4',
  navShadow: '0px 4px 16px 0px rgb(20 71 82)',
  headerShadow: '0px 4px 16px 0px rgb(2 72 85)',
  contentShadow: '0px 4px 21px 0px rgb(16 106 110)',
  companyLogo: 'linear-gradient(0deg, rgb(42 186 213) 0%, rgb(255 19 250) 100%)',
  companyIcon: '#e959e1',
  divider: 'linear-gradient(to right, #242646, #7e13a1, #242646)',
  placeholder: '#1cc6c1',
  input: '#2d7488',
  border: '#2a6591',
  error: '#d30c6c',
  success: '#20b089',
  errorBackground: '#9c164998',
  successBackground: '#b164b598',
  buttons: 'linear-gradient(0deg, rgb(23 65 78) 0%, rgb(46 116 136) 100%)',
  hover: 'linear-gradient(0deg, rgb(12 33 39) 0%, rgb(44 112 132) 100%)',
  active: '#12cdff',
  link: '#27b1ff',
  tooltipText: '#131f2c',
  tooltipBackground: '#89aad1',
  cardBackground: '#433662d6',
  cardBorder: '#1e6078',
  cardHeaderColour: '#6c457e',
  logoBackground: '#122539',
  bannerColour: '#72456c',
};

export const fairy = {
  primary: '#d8a3e1',
  secondary: '#f9c6fa',
  text: '#550850',
  navText: '#f9c6fa',
  navBackground: '#b087b7e0',
  navShadow: '0px 4px 16px 0px rgb(73 26 74)',
  headerShadow: '0px 4px 16px 0px rgb(84 32 90)',
  contentShadow: '0px 4px 21px 0px rgb(146 105 161)',
  companyLogo: 'linear-gradient(0deg, rgb(234 175 245) 0%, rgb(255 178 218) 100%)',
  companyIcon: '#ffb2da',
  divider: 'linear-gradient(to right, #fbb4f2, #c510d9, #fbb4f2)',
  placeholder: '#99628e',
  input: '#ce90df',
  border: '#d99cf6',
  error: '#d30c6c',
  success: '#20b089',
  errorBackground: '#9c164998',
  successBackground: '#b164b598',
  buttons: 'linear-gradient(0deg, rgb(206 144 223) 0%, rgb(249 198 250) 100%)',
  hover: 'linear-gradient(0deg, rgb(150 92 166) 0%, rgb(243 180 244) 100%)',
  active: '#12cdff',
  link: '#27b1ff',
  tooltipText: '#131f2c',
  tooltipBackground: '#89aad1',
  cardBackground: '#a672b4c7',
  cardBorder: '#bb94bb',
  cardHeaderColour: '#eaadf5',
  logoBackground: '#122539',
  bannerColour: '#d1a6fe',
};


export const themes = {
  dark,
  light,
  cool,
  fairy,
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
  { icon: '/icons/fairy.png', background: '/backgrounds/fairy.jpg', name: 'fairy' },
];

export const OSTheme =
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';


export const savedTheme: keyof typeof themes = store.get('theme')?.value;
