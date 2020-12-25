/**
 * SnackBar.tsx
 * developed by Hasan Alawneh.
 * A file that shows a SnackBar styles.
 * created at: 21/12/2020
 */

import { StyleSheet } from 'react-native';
import { COLOR } from 'theme';

/**
 * A styles for SnackBar.
 */
const styles = StyleSheet.create({
    snackBar: {
        backgroundColor: COLOR.error,
        width: '100%',
        alignSelf: 'center'
    }
});

/**
 * export as default.
 */
export default styles;