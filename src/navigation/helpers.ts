/**
 * helpers.ts
 * developed by Hasan Alawneh.
 * A file where navigation helpers lived.
 * created at: 21/12/2020
 */

import {
    Navigation,
    Options
} from "react-native-navigation";
import {
    AUTH_STACK,
    APP_STACK
} from "./contants";
import {
    SCREENS,
    Screens
} from "./screens";
import {
    COLOR,
    scaleFont
} from "theme";

/**
 * A function helper that goes to auth stack.
 */
export async function goToAuthStack() {
    Navigation.setRoot({
        root: {
            stack: {
                id: AUTH_STACK,
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
 * A function helper that goes to app.
 */
export async function goToAppStack() {
    Navigation.setRoot({
        root: {
            stack: {
                id: APP_STACK,
                children: [{
                    component: {
                        id: SCREENS.HOME_SCREEN,
                        name: SCREENS.HOME_SCREEN
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
            visible: true,
            background: {
                color: COLOR.royalBlue
            },
            title: {
                fontSize: scaleFont(22),
                color: COLOR.light
            },
            backButton: {
                color: COLOR.light
            }
        },
    })
};

/**
 * Pushes new screen to stack.
 */
export function pushToStack(
    currentComponentId: string,
    screenName: Screens,
    propsToPassed: Object = {},
    options: Options = {}
) {
    Navigation.push(
        currentComponentId,
        {
            component: {
                name: SCREENS[screenName],
                id: SCREENS[screenName],
                passProps: propsToPassed,
                options: options
            },

        }
    );
};

/**
 * Go back to previous screen.
 */
export function goBack(currentComponentId: string) {
    Navigation.pop(currentComponentId);
};

/**
 * Toggles a modal.
 * 'componentId' is required when meeds to hide.
 * 'screenName' is required when needs to show.
 */
export function toggleModal({
    action,
    screenName,
    componentId,
    propsToPassed,
}: {
    action: 'SHOW' | 'HIDE';
    screenName?: Screens;
    componentId?: string;
    propsToPassed?: Object
}) {
    if (action === 'SHOW') {
        Navigation.showModal({
            component: {
                id: SCREENS[screenName],
                name: SCREENS[screenName],
                passProps: propsToPassed
            }
        });
    } else {
        Navigation.dismissModal(componentId);
    };
};