/**
 * types.ts
 * developed by Hasan Alawneh.
 * A file that contains all types for redux slices.
 * created at: 24/12/2020
 */

export type LocalUser = {
    email: string;
    creationTime: string;
    uid: string;
};
export interface UserState {
    loading: boolean;
    error: string;
    success: boolean;
    user: LocalUser;
};