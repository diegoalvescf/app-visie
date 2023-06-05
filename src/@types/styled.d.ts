import 'styled-components/native';

import theme from '../common/theme/theme.ts';

declare module 'styled-components/native' {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}
