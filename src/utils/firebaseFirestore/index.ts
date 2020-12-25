/**
 * firebaseFirestore.ts
 * developed by Hasan Alawneh.
 * A file that contains a function sthat mamages a firebase
 * * firestore connection
 * created at: 25/12/2020
 */

import firestore from '@react-native-firebase/firestore';
import { COLLECTION } from './constants';
import { ChatRoom } from './types';

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
            creationDate: new Date().getTime()
        };

        const res = await firestore()
            .collection(COLLECTION.CHAT_ROOMS)
            .add(chatRoomToBeAdded);
        console.log('add room res', res)
    } catch (error) {
        console.log('error in createRoom', error);
    }
};

/**
 * A function that add a listener to rooms collection chnages.
 */
export function getChatRooms() {
    try {
        return firestore().collection(COLLECTION.CHAT_ROOMS)
    } catch (error) {
        console.log('error in listenToRoomChanges', error);
    }
};