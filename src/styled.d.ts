import 'styled-components';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { colors } from './constants';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme {
    colors: typeof colors;
  }
}
