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
import {
    GiftedChat,
    Send,
    Avatar
} from 'react-native-gifted-chat';
import { NavigationComponentProps } from 'react-native-navigation';
import {
    Message,
    addNewMessage,
    getRoomMessages,
    updateLatestMessage
} from 'utils';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { userSelector } from 'redux/slices';
import { translate } from 'i18n';
import {
    PaperIcon,
    ScreenLoader
} from 'components';
import { scaleSize } from 'theme';

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
                        const {
                            _id,
                            text,
                            user,
                            createdAt
                        } = messageDoc.data();

                        return {
                            _id,
                            text,
                            user: {
                                _id: user._id,
                                name: user.name
                            },
                            createdAt: createdAt.seconds
                        } as Message;

                    });

                    /**
                     * update messages.
                     */
                    setMessages(GiftedChat.append(messages, newMessages));

                });
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
        addNewMessage(
            {
                ...m[0],
                createdAt: new Date().getTime()
            },
            roomId
        );

        /**
         * update the latest message.
         */
        updateLatestMessage(
            roomId,
            {
                text: m[0].text,
                creationTime: new Date().getTime()
            }
        );

    };

    return (
        <View style={styles.container}>
            <GiftedChat
                messages={messages}
                onSend={newMessage => handleSend(newMessage)}
                user={{
                    _id: user && user.uid,
                    name: user && user.email
                }}
                placeholder={translate('roomsScreen.sendPlaceholder')}
                renderSend={renderSend}
                scrollToBottom
                scrollToBottomComponent={renderScrollToBottomComponent}
                renderLoading={ScreenLoader}
                renderAvatar={renderAvatar}
            />
        </View>
    );
};

/**
 * A function that renderes send button.
 */
function renderSend(props: any) {
    return (
        <Send {...props}>
            <View style={styles.sendingContainer}>
                <PaperIcon
                    icon='send-circle'
                    size={scaleSize(28)}
                />
            </View>
        </Send>
    );
};

/**
 * A function that renderes scroll to button.
 */
function renderScrollToBottomComponent() {
    return (
        <View style={styles.bottomComponentContainer}>
            <PaperIcon
                icon='chevron-double-down'
                size={scaleSize(28)}
            />
        </View>
    );
};

/**
 * A function that renderes and sender avatar.
 */
const renderAvatar = (props: any) => {
    return (
        <Avatar
            currentMessage
            {...props}
            textStyle={styles.textAvatarStyle}
        />
    );
};

/**
 * export as default.
 */
export default RoomScreen;