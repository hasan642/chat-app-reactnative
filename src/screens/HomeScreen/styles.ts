/**
 * HomeScreen.tsx
 * developed by Hasan Alawneh.
 * A file that shows a HomeScreen styles.
 * created at: 21/12/2020
 */

import { StyleSheet } from 'react-native';
import {
  COLOR,
  MARGINS,
  scaleFont,
  PADDINGS,
  scaleSize
} from 'theme';

/**
 * A styles for HomeScreen.
 */
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.wildSand,
    flex: 1,
  },
  btn: {
    marginBottom: MARGINS.NORMAL
  },
  listTitle: {
    fontSize: scaleFont(18)
  },
  listDescription: {
    fontSize: scaleFont(14),
    paddingTop: PADDINGS.SMALL
  },
  fab: {
    position: 'absolute',
    right: MARGINS.LARGE,
    backgroundColor: COLOR.royalBlue,
    height: scaleSize(40),
    width: scaleSize(40),
    justifyContent: 'center',
    alignItems: 'center'
  }
});

/**
 * export as default.
 */
export default styles;