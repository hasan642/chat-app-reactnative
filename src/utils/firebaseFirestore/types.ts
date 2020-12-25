/**
 * types.ts
 * developed by Hasan Alawneh.
 * A file that contains a types for firestore and firestore colections
 * * in the app.
 * created at: 25/12/2020
 */

/**
 * The room type.
 */
export interface ChatRoom {
    name: string;
    creationDate: number;

    /**
     * 'id' will be created automatically with firebase.
     */
    id?: string;
    
};