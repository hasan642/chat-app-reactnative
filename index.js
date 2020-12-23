/**
 * the root file.
 */

import { Navigation } from "react-native-navigation";
import {
    registerScreens,
    goToApp,
    setDefaultOptions
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
     * set default navigation options.
     */
    setDefaultOptions();

    /**
     * set the root app.
     */
    goToApp();

});