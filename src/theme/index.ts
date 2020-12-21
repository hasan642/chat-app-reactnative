/**
 * This file for namespacing for theme.
 */
import { DefaultTheme } from 'react-native-paper';

export * from './color';
export * from './typography';
export * from './layout';

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