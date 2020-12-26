/**
 * HomeScreen.tsx
 * developed by Hasan Alawneh.
 * A file that shows a HomeScreen component.
 * created at: 21/12/2020
 */

import React, {
    useEffect,
    useState
} from 'react';
import {
    View,
    FlatList
} from 'react-native';
import styles from './styles';
import {
    Divider,
    List
} from 'react-native-paper';
import {
    toggleModal,
    pushToStack
} from 'navigation';
import {
    Options,
    NavigationComponentProps
} from 'react-native-navigation';
import { translate } from 'i18n';
import {
    getChatRooms,
    ChatRoom
} from 'utils';
import { FAB } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MARGINS } from 'theme';
import { ScreenLoader } from 'components';

/**
 * type checking
 */
interface HomeScreenProps extends NavigationComponentProps {

};

/**
 * A function component that shows a HomeScreen.
 */
function HomeScreen({ componentId }: HomeScreenProps) {

    /**
     * get bottom inset from safe area.
     */
    const { bottom: bottomInset } = useSafeAreaInsets();
    const [fetchingRooms, setFetchingRooms] = useState<boolean>(true);

    /**
     * state.
     */
    const [chatRooms, setChatRooms] = useState<ChatRoom[]>();

    /**
     * Listens and gets data rooms from firebase.
     */
    useEffect(
        () => {

            /**
             * Gets and serizlizes the chat rooms.
             */
            const unsubscribe = getChatRooms()
                .onSnapshot(({ docs: roomCollections }) => {
        
                    /**
                     * transform room collection.
                     */
                    const chatRooms: ChatRoom[] = roomCollections.map(docSnapShot => {

                        /**
                         * grap data from doc.
                         */
                        const {
                            name,
                            creationTime,
                            latestMessage
                        } = docSnapShot.data();

                        return {
                            name,
                            creationTime,
                            latestMessage,
                            id: docSnapShot.id
                        };
                    });

                    /**
                     * update the chat rooms.
                     */
                    setChatRooms(chatRooms);

                    /**
                     * turn off loader.
                     */
                    setFetchingRooms(false);

                });

            /**
             * clean up function.
             */
            return unsubscribe;
        },
        []
    );

    /**
     * Renderes chat room.
     */
    const renderChatRoom = ({ item }: { item: ChatRoom }) => {

        /**
         * the description of item.
         */
        const description = (item.latestMessage && item.latestMessage.text) || ' ';

        return (
            <List.Item

                {...{} as any}

                title={item.name}
                description={description}
                titleNumberOfLines={1}
                titleStyle={styles.listTitle}
                descriptionStyle={styles.listDescription}
                descriptionNumberOfLines={1}
                onPress={() => handleChatRoomPress(item)}
            />
        );
    };

    /**
     * Renderes item seperator component.
     */
    const renderDivider = () => <Divider {...{} as any} />;

    /**
     * Handles chat room press.
     */
    const handleChatRoomPress = (chatRoom: ChatRoom) => {
        pushToStack(
            componentId,
            'ROOM_SCRREN',
            { roomId: chatRoom.id },
            {
                topBar: {
                    title: {
                        text: chatRoom.name
                    }
                }
            }
        );
    };

    /**
     * Handles fab press.
     */
    const handleFabPress = () => {
        toggleModal({
            action: 'SHOW',
            screenName: 'ADD_ROOM'
        });
    };

    return (<View style={styles.container}>
        <FlatList
            data={chatRooms}
            renderItem={renderChatRoom}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={renderDivider}
            showsVerticalScrollIndicator={false}
        />

        <FAB

            {...{} as any}

            style={[
                styles.fab,
                { bottom: bottomInset + MARGINS.NORMAL }
            ]}
            small
            icon="plus"
            onPress={handleFabPress}
        />

        {fetchingRooms && <ScreenLoader />}
    </View>);
};

/**
 * add navigation options to home screen.
 * 
 * as a function to make 'translate' function works well.
 */
HomeScreen.options = (): Options => {
    return {
        topBar: {
            title: {
                text: translate('homeScreen.name')
            }
        }
    }
};

/**
 * export as default.
 */
export default HomeScreen;