/**
 * commonStyles.ts
 * developed by Hasan Alawneh.
 * A file that contains a common styles for app.
 * created at: 23/12/2020
 */

import { ViewStyle } from "react-native";
import { DefaultTheme } from "react-native-paper";

/**
 * Adds box shadow to view.
 */
export function addBoxShadow(
    color: string,
    offset = { height: 2, width: 2 },
    radius = 8,
    opacity = 0.2
): ViewStyle {
    return {
        shadowColor: color,
        shadowOffset: offset,
        shadowOpacity: opacity,
        shadowRadius: radius,
        elevation: radius,
    };
};

/**
 * export theme for react native paper.
 */
export const paperTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'tomato',
        accent: 'yellow',
    },
};