/**
 * Button.tsx
 * developed by Hasan Alawneh.
 * A file that shows a Button component.
 * created at: 21/12/2020
 */

import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Button as RNPaperBtn } from 'react-native-paper';
/**
 * type checking
 */
interface ButtonProps {
    mode?: 'text' | 'outlined' | 'contained';
    title: string;
};

/**
 * A function component that shows a Button.
 */
function Button({
    mode = 'outlined',
    title
}: ButtonProps) {
    return (<RNPaperBtn

        {...{} as any}
        
        style={styles.btn}
        mode={mode}
    >
        {title}
    </RNPaperBtn>);
};

/**
 * export as default.
 */
export default Button;