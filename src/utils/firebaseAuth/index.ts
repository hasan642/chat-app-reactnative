/**
 * validator.ts
 * developed by Hasan Alawneh.
 * A file that contains an auth functions with firebase.
 * created at: 24/12/2020
 */

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

/**
 * Logins with email and password.
 */
export async function loginWithEmailAndPassword(
    email: string,
    password: string
): Promise<FirebaseAuthTypes.UserCredential> {
    try {
        const UserCredential = await auth().signInWithEmailAndPassword(email, password);
        console.log({ userCredintials: UserCredential });
    } catch (error) {
        console.log('error in loginWithEmailAndPassword', error);
        return Promise.reject(handleFirebaseErrorByCode(error.code));
    };
};

/**
 * Registeres with email and password.
 */
export async function registerWithEmailAndPassword(
    email: string,
    password: string
): Promise<FirebaseAuthTypes.UserCredential> {
    try {
        const UserCredential = await auth().createUserWithEmailAndPassword(email, password);
        console.log({ userCredintials: UserCredential });
    } catch (error) {
        console.log('error in registerWithEmailAndPassword', error);
        return Promise.reject(handleFirebaseErrorByCode(error.code));
    };
};

/**
 * Logouts.
 */
export async function logout() {
    try {
        await auth().signOut();
    } catch (error) {
        console.log('error in logout', error);
        return Promise.reject(handleFirebaseErrorByCode(error.code));
    }
};

/**
 * Handles error by code.
 */
function handleFirebaseErrorByCode(errorCode: string): string {

    /**
     * start with unknown error as default..
     */
    let errorMessage: string = 'Unknown error';

    /**
     * check error by code.
     */
    switch (errorCode) {
        case 'auth/email-already-in-use':
            errorMessage = 'Email is already used';
            break;
    };

    /**
     * return final error message.
     */
    return errorMessage;
};