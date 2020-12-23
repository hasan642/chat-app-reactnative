/**
 * layout.ts
 * developed by Hasan Alawneh.
 * A file that contains a layout of app.
 * created at: 21/12/2020
 */

import {
    Dimensions,
    PixelRatio,
    ViewStyle
} from 'react-native';

/**
 * constants.
 */
const guidelineBaseWidth = 375;

/**
 * export window dimensions.
 */
export const WINDOW_DIMENSIONS = Dimensions.get('window');

/**
 * export responsive size functions,
 */
export function scaleSize(size: number) {
    return WINDOW_DIMENSIONS.width / guidelineBaseWidth * size;
}
export function scaleFont(size: number) {
    return size * PixelRatio.getFontScale();
};