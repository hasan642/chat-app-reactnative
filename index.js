/**
 * the root file.
 */

import { Navigation } from "react-native-navigation";
import {
    registerScreens,
    goToApp,
    setDefaultOptions
} from "navigation";
import { setI18nConfig } from "i18n";

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
     * set i18n config.
     */
    setI18nConfig();

    /**
     * set the root app.
     */
    goToApp();

});