/**
 * the root file.
 */

import { Navigation } from "react-native-navigation";
import {
    registerScreens,
    goToApp
} from "navigation";

/**
 * Register navigation screens.
 */
registerScreens();

/**
 * "registerAppLaunchedListener" event.
 */
Navigation.events().registerAppLaunchedListener(() => {

    /**
     * set the root app.
     */
    goToApp();

});