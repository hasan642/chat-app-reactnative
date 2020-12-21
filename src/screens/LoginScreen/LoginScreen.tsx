/**
 * LoginScreen.tsx
 * developed by Hasan Alawneh.
 * A file that shows a LoginScreen component.
 * created at: 21/12/2020
 */

import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * type checking
 */
interface LoginScreenProps {

};

/**
 * A function component that shows a LoginScreen.
 */
function LoginScreen(props: LoginScreenProps) {
    return (<View style={styles.container}>
<Icon name="rocket" size={30} color="#900" />
    </View>);
};

/**
 * export as default.
 */
export default LoginScreen;