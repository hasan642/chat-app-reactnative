/**
 * color.ts
 * developed by Hasan Alawneh.
 * A file that shows a colors of app.
 * created at: 21/12/2020
 */

export const COLOR = Object.freeze({
    light: '#FFF',
    dark: '#000',
    wildSand: "#F5F5F5",
    royalBlue: '#6646ee',
    error: '#FF3333'
});

/**
 * export the type of color.
 */
export type Color = keyof typeof COLOR;