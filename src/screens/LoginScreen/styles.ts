/**
 * LoginScreen.tsx
 * developed by Hasan Alawneh.
 * A file that shows a LoginScreen styles.
 * created at: 21/12/2020
 */

import { StyleSheet } from 'react-native';
import {
  COLOR,
  MARGINS
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
    paddingHorizontal: 24
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10
  },
  loginButtonLabel: {
    fontSize: 22,
  },
  navButtonText: {
    fontSize: 16
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