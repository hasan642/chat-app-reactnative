/**
 * SignupScreen.tsx
 * developed by Hasan Alawneh.
 * A file that shows a SignupScreen styles.
 * created at: 23/12/2020
 */

import { StyleSheet } from 'react-native';
import {
  scaleFont,
  MARGINS,
  PADDINGS,
  COLOR
} from 'theme';

/**
 * A styles for SignupScreen.
 */
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.wildSand,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: PADDINGS.VERY_LARGE
  },
  titleText: {
    fontSize: scaleFont(20),
    marginBottom: MARGINS.NORMAL
  },
  passwordInput: {
    marginTop: MARGINS.NORMAL
  },
  loginButtonLabel: {
    fontSize: scaleFont(16),
  },
  loginBtnStyle: {
    marginTop: MARGINS.NORMAL
  },
  backIcon: {
    marginTop: MARGINS.NORMAL
  }
});

/**
 * export as default.
 */
export default styles;