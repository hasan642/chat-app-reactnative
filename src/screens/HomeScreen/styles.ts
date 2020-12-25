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
  PADDINGS
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
    fontSize: scaleFont(22)
  },
  listDescription: {
    fontSize: scaleFont(16),
    paddingTop: PADDINGS.SMALL
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor:COLOR.royalBlue
  }
});

/**
 * export as default.
 */
export default styles;