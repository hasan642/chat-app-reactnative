/**
 * userSlice.ts
 * developed by Hasan Alawneh.
 * A file that contains a user slice.
 * created at: 24/12/2020
 */

import {
    UserState,
    LocalUser
} from "redux/types";
import {
    createSlice,
    PayloadAction
} from "@reduxjs/toolkit";
import { SLICES_NAMES } from '../constants';
import {
    registerWithEmailAndPassword,
    loginWithEmailAndPassword,
    StorageHelper
} from "utils";
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
        setUser: (state, { payload: user }: PayloadAction<LocalUser>) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.user = user;
        },
        reset: (state) => {
            state.loading = false;
            state.error = null;
            state.success = false;
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
    reset
} = userSlice.actions;
export { reset };

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
export function signup(
    email: string,
    password: string
): Dispatch<any> {
    return async (dispatch: Dispatch<any>) => {
        try {

            /**
             * convert email to lowercase.
             */
            email = email.toLocaleLowerCase();

            /**
             * loading.
             */
            dispatch(loadUser());

            /**
             * register user.
             */
            const user = await registerWithEmailAndPassword(
                email,
                password
            );

            /**
             * create a local user.
             */
            const localUser: LocalUser = {
                email: user.email,
                creationTime: user.metadata.creationTime,
                uid: user.uid
            };

            /**
             * save user to storage.
             */
            StorageHelper.save(
                '@User',
                localUser
            );

            /**
             * save user to redux.
             */
            dispatch(setUser(localUser));

        } catch (error) {
            dispatch(setError(error));
        };
    };
};

/**
 * Logins with email and password.
 */
export function login(
    email: string,
    password: string
): Dispatch<any> {
    return async (dispatch: Dispatch<any>) => {
        try {

            /**
             * convert email to lowercase.
             */
            email = email.toLocaleLowerCase();

            /**
             * loading.
             */
            dispatch(loadUser());

            /**
             * register user.
             */
            const user = await loginWithEmailAndPassword(
                email,
                password
            );

            /**
             * create a local user.
             */
            const localUser: LocalUser = {
                email: user.email,
                creationTime: user.metadata.creationTime,
                uid: user.uid
            };

            /**
             * save user to storage.
             */
            StorageHelper.save(
                '@User',
                localUser
            );

            /**
             * save user to redux.
             */
            dispatch(setUser(localUser));

        } catch (error) {
            dispatch(setError(error));
        };
    };
};