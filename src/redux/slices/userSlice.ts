/**
 * userSlice.ts
 * developed by Hasan Alawneh.
 * A file that contains a user slice.
 * created at: 24/12/2020
 */

import { UserState } from "redux/types";
import {
    createSlice,
    PayloadAction
} from "@reduxjs/toolkit";
import { SLICES_NAMES } from '../constants';
import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { registerWithEmailAndPassword } from "utils";
import { Dispatch } from "react";

/**
 * The initial state of user slice.
 */
const initialState: UserState = {
    loading: false,
    error: null,
    success: false,
    user: null
};

/**
 * Creates a user slice.
 */
const userSlice = createSlice({
    name: SLICES_NAMES.USER_SLICE,
    initialState,
    reducers: {
        loadUser: (state) => {
            state.loading = true;
            state.error = null;
            state.success = false;
        },
        setError: (state, { payload: error }: PayloadAction<string>) => {
            state.loading = false;
            state.error = error;
            state.success = false;
        },
        setUser: (state, { payload: user }: PayloadAction<FirebaseAuthTypes.UserCredential>) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.user = user;
        },
    },
});

/**
 * grap the actions.
 */
const {
    loadUser,
    setError,
    setUser,
} = userSlice.actions;

/**
 * export all needed from userSlice.
 * 
 * 'selector' allows us to select a specific bit from store state,
 * * in this case we get a user state from store.
 */
export const userSelector = (state: { userStore: UserState }) => state.userStore;
export default userSlice.reducer;

/**
 * Registeres with email and password.
 */
export const registerWithEmailAndPasswordAction = (
    email: string,
    password: string
) => {
    return async (dispatch: Dispatch<any>) => {
        try {

            /**
             * loading.
             */
            dispatch(loadUser());

            /**
             * register user.
             */
            const userCredinitial = await registerWithEmailAndPassword(
                email,
                password
            );
  
            /**
             * save user to redux.
             */
            dispatch(setUser(userCredinitial));

        } catch (error) {
            console.log('error in registerWithEmailAndPassword', error);
            dispatch(setError(error.message));
        };
    };
};