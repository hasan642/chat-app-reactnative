/**
 * HomeScreen.tsx
 * developed by Hasan Alawneh.
 * A file that shows a HomeScreen component.
 * created at: 21/12/2020
 */

import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Title } from 'react-native-paper';
import { Button } from 'components';
import { StorageHelper } from 'utils';
import { goToAuthStack } from 'navigation';

/**
 * type checking
 */
interface HomeScreenProps {

};

/**
 * A function component that shows a HomeScreen.
 */
function HomeScreen(props: HomeScreenProps) {
    return (<View style={styles.container}>
        <Title>Home Screen</Title>
        <Title>All chat rooms will be listed here</Title>
        <Button
            onPress={() => {
                StorageHelper.clear('@User');
                goToAuthStack();
            }}
            mode='contained'
            title='Logout'
        />
    </View>);
};

/**
 * export as default.
 */
export default HomeScreen;