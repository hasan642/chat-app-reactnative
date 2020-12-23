
/**
 * helpers.ts
 * developed by Hasan Alawneh.
 * A file where navigation helpers lived.
 * created at: 21/12/2020
 */

import { Navigation } from "react-native-navigation";
import { ROOT } from "./contants";
import { SCREENS } from "./screens";

/**
 * A function helper that goes to app.
 */
export async function goToApp() {
    Navigation.setRoot({
        root: {
            stack: {
                id: ROOT,
                children: [{
                    component: {
                        id: SCREENS.LOGIN_SCRREN,
                        name: SCREENS.LOGIN_SCRREN
                    }
                }]
            }
        }
    });
};

/**
 * A function helper that set default options for navigation.
 */
export function setDefaultOptions() {
    Navigation.setDefaultOptions({
        topBar: {
            visible: false
        },
    })
};