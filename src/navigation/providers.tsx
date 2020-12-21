/**
 * providers.tsx
 * developed by Hasan Alawneh.
 * A file that contains providers for screens.
 * created at: 21/12/2020
 */

import { Provider as PaperProvider } from 'react-native-paper';
import { paperTheme } from 'theme';

/**
 * Add paper provider.
 */
export function withPaperProvider(Comp: any) {
    return (
        <PaperProvider theme={paperTheme}>
            <Comp />
        </PaperProvider>
    );
};