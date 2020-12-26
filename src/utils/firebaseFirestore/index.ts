/**
 * firebaseFirestore.ts
 * developed by Hasan Alawneh.
 * A file that contains a function sthat mamages a firebase
 * * firestore connection
 * created at: 25/12/2020
 */

import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { COLLECTION } from './constants';
import { ChatRoom, Message } from './types';

/**
 * A function that creates new room.
 */
export async function createRoom(roomName: string) {
    try {

        /**
         * create room to be added.
         */
        const chatRoomToBeAdded: ChatRoom = {
            name: roomName,
            creationTime: new Date().getTime()
        };

        /**
         * Creates the chat room.
         */
        await firestore()
            .collection(COLLECTION.CHAT_ROOMS)
            .add(chatRoomToBeAdded);

    } catch (error) {
        console.log('error in createRoom', error);
    }
};

/**
 * A function that add a listener to rooms collection chnages.
 */
export function getChatRooms() {
    try {
        return firestore().collection(COLLECTION.CHAT_ROOMS);
    } catch (error) {
        console.log('error in listenToRoomChanges', error);
    }
};

/**
 * A function helper that adds new message to firestore.
 */
export function addNewMessage(
    m: Message,
    roomId: string
) {
    try {
        return firestore()
            .collection(COLLECTION.CHAT_ROOMS)
            .doc(roomId)
            .collection(COLLECTION.MESSAGES)
            .add(m);
    } catch (error) {
        console.log('error in addNewMessage', error);
    }
};

/**
 * A function helper that gets room messages.
 */
export function getRoomMessages(roomId: string) {
    try {

        /**
         * create the path for messages.
         */
        const pathToMessages = `${COLLECTION.CHAT_ROOMS}/${roomId}/${COLLECTION.MESSAGES}`;
        return firestore().collection(pathToMessages);
        
    } catch (error) {
        console.log('error is', error);
    }
};