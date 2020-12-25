/**
 * types.ts
 * developed by Hasan Alawneh.
 * A file that contains all types for redux slices.
 * created at: 24/12/2020
 */

import { FirebaseAuthTypes } from '@react-native-firebase/auth';
export interface UserState {
    loading: boolean;
    error: string;
    success: boolean;
    user: FirebaseAuthTypes.UserCredential;
};