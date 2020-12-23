/**
 * LoginScreen.tsx
 * developed by Hasan Alawneh.
 * A file that shows a LoginScreen styles.
 * created at: 21/12/2020
 */

import { StyleSheet } from 'react-native';
import {
  COLOR,
  MARGINS,
  scaleFont,
  PADDINGS
} from 'theme';

/**
 * A styles for LoginScreen.
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
  loginButtonLabel: {
    fontSize: scaleFont(16),
  },
  navButtonText: {
    fontSize: scaleFont(15)
  },
  passwordInput: {
    marginTop: MARGINS.NORMAL
  },
  loginBtnStyle: {
    marginTop: MARGINS.NORMAL
  }
});

/**
 * export as default.
 */
export default styles;