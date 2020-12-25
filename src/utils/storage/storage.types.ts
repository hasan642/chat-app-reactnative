/**
 * i18n.ts
 * developed by Hasan Alawneh.
 * A file that contains a types for storage.
 * created at: 25/12/2020
 */

import { LanguagesKeys } from 'i18n';

/**
 * The keys types.
 */
export type Key = '@Language';

/**
 * The language model.
 */
export interface LanguageModel {
    lang: LanguagesKeys;
    isRTL: boolean;
};

/**
 * The type of storage models.
 */
export type StorageModel = LanguageModel;