/**
 * screens.ts
 * developed by Hasan Alawneh.
 * A file where navigation screens registered.
 * created at: 21/12/2020
 */

import { Navigation } from "react-native-navigation";
import {
    LoginScreen,
    SignupScreen,
    HomeScreen,
    AddRoomScreen
} from 'screens';
import { withRedux, withSafeArea } from "./providers";

/**
 * constants.
 */
const prefix = 'com.chatsy';
const modalPrefix = 'com.chatsy.modal';

/**
 * modal names.
 */
const modalNames = {
    ADD_ROOM: `${modalPrefix}.addRoomScreen`,
};

/**
 * screen names.
 */
export const SCREENS = Object.freeze({
    LOGIN_SCRREN: `${prefix}.loginScreen`,
    SIGNUP_SCRREN: `${prefix}.signupScreen`,
    HOME_SCREEN: `${prefix}.homeScreen`,
    ...modalNames
});

/**
 * A function that registeres screens.
 */
export function registerScreens() {
    Navigation.registerComponent(
        SCREENS.LOGIN_SCRREN,
        () => withRedux(LoginScreen),
        () => LoginScreen
    );

    Navigation.registerComponent(
        SCREENS.SIGNUP_SCRREN,
        () => withRedux(SignupScreen),
        () => SignupScreen
    );

    Navigation.registerComponent(
        SCREENS.HOME_SCREEN,
        () => HomeScreen
    );

    Navigation.registerComponent(
        SCREENS.ADD_ROOM,
        () => withSafeArea(AddRoomScreen),
        () => AddRoomScreen
    );
};

/**
 * export type of screens.
 */
export type Screens = keyof typeof SCREENS;