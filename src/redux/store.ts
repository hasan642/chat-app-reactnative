/**
 * store.ts
 * developed by Hasan Alawneh.
 * A file that contains a store of redux.
 * created at: 24/12/2020
 */

import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from './slices';

/**
 * create a store.
 */
const store = configureStore({
    reducer: {

        /**
         * all resucers should be called here.
         */
        userStore: userReducer,

    },
    middleware: (defaultMiddleware) => defaultMiddleware({
        serializableCheck: false
    }),
});

/**
 * export store as default.
 */
export default store;