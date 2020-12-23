/**
 * Input.tsx
 * developed by Hasan Alawneh.
 * A file that shows a Input styles.
 * created at: 21/12/2020
 */

import { StyleSheet } from 'react-native';
import {
  RADIUS,
  COLOR
} from 'theme';

/**
 * A styles for Input.
 */
const styles = StyleSheet.create({
  input: {
    width: '100%'
  },
  errorMessage: {
    textAlign: 'left',
    alignSelf: 'flex-start'
  }
});

/**
 * the theme of input.
 */
export const theme = {
  colors: {
    primary: COLOR.royalBlue
  },
  roundness: RADIUS.SMALL
};

/**
 * export as default.
 */
export default styles;