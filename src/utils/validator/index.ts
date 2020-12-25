/**
 * validator.ts
 * developed by Hasan Alawneh.
 * A file that contains a validators for forms with Yup.
 * created at: 22/12/2020
 */

import * as yup from "yup";
import { translate } from "i18n";

/**
 * A login screen validator.
 */
export const loginFormValidator = () => yup.object().shape({
    email: yup.string()
        .required(translate('validation.fieldRequired'))
        .email(translate('validation.emailNotValid')),
    password: yup.string()
        .required(translate('validation.fieldRequired'))
        .min(6, translate('validation.passwordLengthError', { length: 6 }))
});

/**
 * A signup screen validator.
 */
export const signupFormValidator = () => yup.object().shape({
    email: yup.string()
        .required(translate('validation.fieldRequired'))
        .email(translate('validation.emailNotValid')),
    password: yup.string()
        .required(translate('validation.fieldRequired'))
        .min(6, translate('validation.passwordLengthError', { length: 6 }))
});

/**
 * An add room screen validator.
 */
export const addRoomValidator = () => yup.object().shape({
    roomName: yup.string()
        .required(translate('validation.fieldRequired'))
        .min(2, translate('validation.roomNameLengthError')),
});