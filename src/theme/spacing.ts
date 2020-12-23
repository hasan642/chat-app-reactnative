/**
 * spacing.ts
 * developed by Hasan Alawneh.
 * A file that contains a spacing (margin,padding,etc..) for app.
 * created at: 23/12/2020
 */

const Sizes = Object.freeze({
    VERY_SMALL: 2,
    SMALL: 4,
    NORMAL: 8,
    LARGE: 16,
    HUGE: 32
});

/**
 * Exports margins, paddings, and radius.
 */
export const MARGINS = Object.freeze({
    SMALL: Sizes.SMALL,
    NORMAL: Sizes.NORMAL,
    LARGE: Sizes.LARGE,
    HUGE: Sizes.HUGE
});
export const PADDINGS = Object.freeze({
    SMALL: Sizes.SMALL,
    NORMAL: Sizes.NORMAL,
    LARGE: Sizes.LARGE,
    HUGE: Sizes.HUGE
});
export const RADIUS = Object.freeze({
    VERY_SMALL: Sizes.VERY_SMALL,
    SMALL: Sizes.SMALL,
    NORMAL: Sizes.NORMAL,
});