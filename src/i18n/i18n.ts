/**
 * i18n.ts
 * developed by Hasan Alawneh.
 * A file that contains a contants for navigation.
 * created at: 25/12/2020
 */

import * as RNLocalize from "react-native-localize";
import memoize from "lodash.memoize";
import i18n from "i18n-js";
import { I18nManager } from 'react-native';
import { StorageHelper } from "utils";
import { LanguageModel } from "utils/storage/storage.types";
import RNRestart from 'react-native-restart';
import { translationGetters } from "./locales";
import { LanguagesKeys } from "./i18n.types";

/**
 * translate function.
 */
export const translate = memoize(
    (key, config = {}) => i18n.t(key, config),
    (key, config) => (config ? key + JSON.stringify(config) : key),
);

/**
 * set config.
 */
export async function setI18nConfig(): Promise<boolean> {

    /**
     * get current language from storage.
     */
    const currentLanguageFromStorage = await StorageHelper.get('@Language') as LanguageModel;

    const {
        languageTag: deviceLang,
    } = RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters))
        ||
        fallback;

    /**
     * final lang.
     */
    const language = currentLanguageFromStorage && currentLanguageFromStorage.lang
        ||
        deviceLang;

    /**
     * set i18n-js config.
     */
    i18n.translations = { [language]: translationGetters[language]() };
    i18n.locale = language;

    return true;
};

/**
 * detects if isRTL.
 */
export function isRTL() {
    return I18nManager.isRTL;
};

/**
 * Chnages the app language and restart.
 */
export function changeLanguage(lang: LanguagesKeys) {

    /**
     * if RTL.
     */
    const isRTL = lang === 'ar';

    /**
     * change local and save the language.
     */
    i18n.locale = lang;
    StorageHelper.save(
        '@Language',
        {
            lang,
            isRTL
        }
    );

    /**
     * change layout (RTL or LTR).
     */
    I18nManager.allowRTL(isRTL);
    I18nManager.forceRTL(isRTL);

    /**
     * restart the app.
     */
    RNRestart.Restart();

};

/**
 * fallback if no available language fits.
 */
export const fallback = {
    languageTag: "en",
    isRTL: false
};