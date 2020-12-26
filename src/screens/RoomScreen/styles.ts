/**
 * RoomScreen.tsx
 * developed by Hasan Alawneh.
 * A file that shows a RoomScreen styles.
 * created at: 21/12/2020
 */

import { StyleSheet } from 'react-native';
import { COLOR } from 'theme';

/**
 * A styles for RoomScreen.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.wildSand
  },
  sendingContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomComponentContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textAvatarStyle: {
    color: COLOR.light,
  }
});

/**
 * export as default.
 */
export default styles;