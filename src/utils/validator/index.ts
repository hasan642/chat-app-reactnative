/**
 * validator.ts
 * developed by Hasan Alawneh.
 * A file that contains a validators for forms with Yup.
 * created at: 22/12/2020
 */

import * as yup from "yup";

/**
 * common validations.
 */
const requiredField = (error: string) => yup.string()
    .required(error);
const passwordField = (
    requiredError: string,
    min: number,
    minError: string
) => yup.string()
    .required(requiredError)
    .min(min, minError);

/**
 * A login screen validator.
 */
export const loginFormValidator = () => yup.object().shape({
    email: requiredField('email is required'),
    password: passwordField('password required', 4, 'should be 4 at least')
});

/**
 * A signup screen validator.
 */
export const signupFormValidator = () => yup.object().shape({
    email: requiredField('email is required'),
    password: passwordField('password required', 4, 'should be 4 at least')
});