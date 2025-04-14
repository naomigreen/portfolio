import { } from 'styled-components';
import { ThemeType } from './themeData';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType { }
} 