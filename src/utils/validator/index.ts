/**
 * validator.ts
 * developed by Hasan Alawneh.
 * A file that contains a validators for forms with Yup.
 * created at: 22/12/2020
 */

import * as yup from "yup";

/**
 * A login screen validator.
 */
export const loginFormValidator = () => yup.object().shape({
    email: yup.string()
        .required('Email is required')
        .email('Email is not valid'),
    password: yup.string()
        .required('Password is required')
        .min(6, 'Password should be 4 letters at least')
});

/**
 * A signup screen validator.
 */
export const signupFormValidator = () => yup.object().shape({
    email: yup.string()
        .required('Email is required')
        .email('Email is not valid'),
    password: yup.string()
        .required('Password is required')
        .min(6, 'Password should be 4 letters at least')
});