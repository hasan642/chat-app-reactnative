/**
 * providers.tsx
 * developed by Hasan Alawneh.
 * A file that contains providers for screens.
 * created at: 21/12/2020
 */

import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { paperTheme } from 'theme';
import { Provider } from "react-redux"
import { reduxStore } from '../redux';

/**
 * Adds paper provider.
 */
export function withPaperProvider(Comp: any) {
    return (
        <PaperProvider theme={paperTheme}>
            <Comp />
        </PaperProvider>
    );
};

/**
 * Adds redux to screen.
 */
export function withRedux(Component: any) {
    return (props: any) => (
        <Provider store={reduxStore}>
            <Component
                {...props}
            />
        </Provider>
    );
};