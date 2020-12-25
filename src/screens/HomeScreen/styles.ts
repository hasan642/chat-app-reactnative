/**
 * HomeScreen.tsx
 * developed by Hasan Alawneh.
 * A file that shows a HomeScreen styles.
 * created at: 21/12/2020
 */

import { StyleSheet } from 'react-native';
import { COLOR, PADDINGS, MARGINS } from 'theme';

/**
 * A styles for HomeScreen.
 */
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.wildSand,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: PADDINGS.LARGE
  },
  btn: {
    marginBottom: MARGINS.NORMAL
  }
});

/**
 * export as default.
 */
export default styles;