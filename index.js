/**
 * the root file.
 */

import { Navigation } from "react-native-navigation";
import {
    registerScreens,
    goToAuthStack,
    setDefaultOptions,
    goToAppStack
} from "navigation";
import { setI18nConfig } from "i18n";
import { init } from "config";
import { StorageHelper } from "utils";

/**
 * Register navigation screens.
 */
registerScreens();

/**
 * "registerAppLaunchedListener" event.
 */
Navigation.events().registerAppLaunchedListener(
    async() => {

        /**
         * set default navigation options.
         */
        setDefaultOptions();

        /**
         * set i18n config.
         */
        setI18nConfig();

        /**
         * execute setup file.
         */
        init();

        /**
         * set the root app based on user auth status.
         */
        const isUserLoggedIn = await StorageHelper.get('@User') !== null;
        if (isUserLoggedIn) {
            goToAppStack()
        } else {
            goToAuthStack();
        };

    }
)