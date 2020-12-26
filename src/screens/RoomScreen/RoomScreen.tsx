/**
 * RoomScreen.tsx
 * developed by Hasan Alawneh.
 * A file that shows a RoomScreen component.
 * created at: 21/12/2020
 */

import React, {
    useState,
    useEffect
} from 'react';
import styles from './styles';
import { GiftedChat } from 'react-native-gifted-chat';
import { NavigationComponentProps } from 'react-native-navigation';
import {
    Message,
    addNewMessage,
    getRoomMessages
} from 'utils';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { userSelector } from 'redux/slices';

/**
 * type checking
 */
interface RoomScreenProps extends NavigationComponentProps {
    roomId: string;
};

/**
 * A function component that shows a RoomScreen.
 */
function RoomScreen({ roomId }: RoomScreenProps) {

    /**
     * state.
     */
    const [messages, setMessages] = useState<Message[]>([]);

    /**
     * Gets prev messages from firestore.
     */
    useEffect(
        () => {

            /**
             * Get and update messages.
             */
            getRoomMessages(roomId)
                .onSnapshot(({ docs }) => {

                    /**
                     * serialize messages to 'Message' type.
                     */
                    const newMessages = docs.map(messageDoc => {
                        const value = messageDoc.data();

                        return {
                            _id: value._id,
                            text: value.text,
                            user: value.user,
                            createdAt: value.createdAt.seconds
                        } as Message;
                    });

                    setMessages(GiftedChat.append(messages, newMessages));

                })
        },
        []
    );

    /**
     * Selects user from redux.
     */
    const { user } = useSelector(userSelector);

    /**
     * Handles send new message.
     */
    const handleSend = (m: Message[]) => {

        /**
         * add message to firestore.
         */
        addNewMessage(m[0], roomId);

    };

    return (
        <View style={styles.container}>
            <GiftedChat
                messages={messages}
                onSend={newMessage => handleSend(newMessage)}
                user={{ _id: user && user.uid }}
            />
        </View>
    );
};

/**
 * export as default.
 */
export default RoomScreen;