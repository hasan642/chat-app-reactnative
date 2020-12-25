/**
 * AddRoomScreen.tsx
 * developed by Hasan Alawneh.
 * A file that shows a AddRoomScreen styles.
 * created at: 21/12/2020
 */

import { StyleSheet } from 'react-native';
import {
  COLOR,
  scaleFont,
  MARGINS,
  PADDINGS
} from 'theme';

/**
 * A styles for AddRoomScreen.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.light
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: PADDINGS.LARGE
  },
  title: {
    fontSize: scaleFont(20),
    marginBottom: MARGINS.NORMAL
  },
  btn: {
    marginTop: MARGINS.NORMAL
  },
  textArea: {
    textAlign: 'left',
    padding:PADDINGS.NORMAL
  },
  textareaContainer: {
    backgroundColor: COLOR.mercury,
    marginTop: MARGINS.NORMAL
  }
});

/**
 * export as default.
 */
export default styles;