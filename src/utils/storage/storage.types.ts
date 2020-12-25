/**
 * i18n.ts
 * developed by Hasan Alawneh.
 * A file that contains a types for storage.
 * created at: 25/12/2020
 */

import { LanguagesKeys } from 'i18n';
import { LocalUser } from 'redux/types';

/**
 * The keys types.
 */
export type Key = '@Language' | '@User';

/**
 * The language model.
 */
export interface LanguageModel {
    lang: LanguagesKeys;
    isRTL: boolean;
};

/**
 * The user model.
 */
export interface UserModel extends LocalUser { };

/**
 * The type of storage models.
 */
export type StorageModel = LanguageModel | UserModel;