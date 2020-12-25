/**
 * i18n.types.ts
 * developed by Hasan Alawneh.
 * A file that contains the types of i18n.
 * created at: 25/12/2020
 */

import { translationGetters } from "./locales";

/**
 * Export the available languages keys
 */
export type LanguagesKeys = keyof typeof translationGetters;