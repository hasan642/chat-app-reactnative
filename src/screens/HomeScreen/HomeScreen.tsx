/**
 * HomeScreen.tsx
 * developed by Hasan Alawneh.
 * A file that shows a HomeScreen component.
 * created at: 21/12/2020
 */

import React, { useEffect } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Title } from 'react-native-paper';
import { Button } from 'components';
import { StorageHelper } from 'utils';
import {
    goToAuthStack,
    toggleModal
} from 'navigation';
import {
    Options,
    Navigation
} from 'react-native-navigation';
import { translate } from 'i18n';

/**
 * type checking
 */
interface HomeScreenProps {

};

/**
 * A function component that shows a HomeScreen.
 */
function HomeScreen(props: HomeScreenProps) {

    /**
     * Listenes to header button press actions.
     */
    useEffect(
        () => {
            // Subscribe
            const navigationButtonEventListener = Navigation.events().registerNavigationButtonPressedListener(({ buttonId }) => {
                if (buttonId === 'ADD_ROOM_ICON') {
                    toggleModal({
                        action: 'SHOW',
                        screenName: 'ADD_ROOM'
                    })
                };
            });

            /**
             * clean up function.
             */
            return () => navigationButtonEventListener.remove();
        },
        []
    );

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
        <Button
            onPress={() => toggleModal({
                action: 'SHOW',
                screenName: 'ADD_ROOM'
            })}
            mode='contained'
            title='Add room'
        />
    </View>);
};

/**
 * add navigation options to home screen.
 * 
 * as a function to make 'translate' function works well.
 */
HomeScreen.options = (): Options => ({
    topBar: {
        title: {
            text: translate('homeScreen.name')
        },
        rightButtons: [
            {
                id: 'ADD_ROOM_ICON',
                showAsAction: 'always',
                icon: require('assets/chat.png'),
            },
        ]
    },
});

/**
 * export as default.
 */
export default HomeScreen;