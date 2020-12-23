
/**
 * helpers.ts
 * developed by Hasan Alawneh.
 * A file where navigation helpers lived.
 * created at: 21/12/2020
 */

import { Navigation } from "react-native-navigation";
import { ROOT } from "./contants";
import { SCREENS, Screens } from "./screens";

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

/**
 * Pushes new screen to stack.
 */
export function pushToStack(
    currentComponentId: string,
    screenName: Screens,
    propsToPassed: Object = {}
) {
    Navigation.push(
        currentComponentId,
        {
            component: {
                name: SCREENS[screenName],
                id: SCREENS[screenName],
                passProps: propsToPassed
            }
        }
    )
};

/**
 * Go back to previous screen.
 */
export function goBack(currentComponentId: string) {
    Navigation.pop(currentComponentId);
};