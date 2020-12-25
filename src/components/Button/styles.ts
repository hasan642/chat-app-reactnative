/**
 * Button.tsx
 * developed by Hasan Alawneh.
 * A file that shows a Button styles.
 * created at: 21/12/2020
 */

import { StyleSheet } from 'react-native';
import { COLOR } from 'theme';

/**
 * A styles for Button.
 */
const styles = StyleSheet.create({
  btn: {
    width: '100%'
  }
});

/**
 * the theme of button.
 */
export const theme = {
  colors: {
    primary: COLOR.royalBlue
  }
};

/**
 * export as default.
 */
export default styles;