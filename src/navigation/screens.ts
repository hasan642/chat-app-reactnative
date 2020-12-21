/**
 * screens.ts
 * developed by Hasan Alawneh.
 * A file where navigation screens registered.
 * created at: 21/12/2020
 */

import { Navigation } from "react-native-navigation";
import {
    LoginScreen,
    SignupScreen
} from 'screens';

/**
 * constants.
 */
const prefix = 'com.medium';

/**
 * screen names.
 */
export const SCREENS = Object.freeze({
    LOGIN_SCRREN: `${prefix}.loginScreen`,
    SIGNUP_SCRREN: `${prefix}.signupScreen`
});

/**
 * A function that registeres screens.
 */
export function registerScreens() {
    Navigation.registerComponent(
        SCREENS.LOGIN_SCRREN,
        () => LoginScreen
    );

    Navigation.registerComponent(
        SCREENS.SIGNUP_SCRREN,
        () => SignupScreen
    );
};

/**
 * export type of screens.
 */
export type Screens = keyof typeof SCREENS;