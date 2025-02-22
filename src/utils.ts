import { createContext } from 'react';

export const MAX_MOBILE = '767px'
export const MIN_TABLET = '768px'
export const MAX_TABLET = '1024px'
export const MIN_DESKTOP = '1025px'


export const DataContext = createContext({
  theme: '',
  setTheme: (value: any) => value,
});

export const emailRegex = /^\S+@\S+\.\S+$/
export const nameRegex = /^[a-z ,.'-]+$/i
