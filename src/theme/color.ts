/**
 * color.ts
 * developed by Hasan Alawneh.
 * A file that shows a colors of app.
 * created at: 21/12/2020
 */

export const COLOR = Object.freeze({
    light: '#FFF',
    dark: '#000'
});

/**
 * export the type of color.
 */
export type Color = keyof typeof COLOR;