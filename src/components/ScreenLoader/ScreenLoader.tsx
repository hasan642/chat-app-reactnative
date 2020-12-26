/**
 * ScreenLoader.tsx
 * developed by Hasan Alawneh.
 * A file that shows a ScreenLoader component.
 * created at: 21/12/2020
 */

import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { ActivityIndicator } from 'react-native-paper';
import { COLOR } from 'theme';

/**
 * A function component that shows a ScreenLoader.
 */
function ScreenLoader() {
    return (<View style={styles.container}>
        <ActivityIndicator
            color={COLOR.royalBlue}
            size='small'

            {...{} as any}
            
        />
    </View>);
};

/**
 * export as default.
 */
export default ScreenLoader;