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
import { SafeAreaProvider } from 'react-native-safe-area-context';

/**
 * Adds paper provider.
 */
export function withPaperProvider(Comp: any) {
    return function (props: any) {
        return (<PaperProvider theme={paperTheme}>
            <Comp  {...props} />
        </PaperProvider>);
    };
};

/**
 * Adds redux to screen.
 */
export function withRedux(Comp: any) {
    return function (props: any) {
        return (<Provider store={reduxStore}>
            <Comp  {...props} />
        </Provider>);
    };
};

/**
 * Wrap the component wit safe area.
 */
export function withSafeArea(Comp: any) {
    return function (props: any) {
        return (<SafeAreaProvider>
            <Comp  {...props} />
        </SafeAreaProvider>);
    };
};