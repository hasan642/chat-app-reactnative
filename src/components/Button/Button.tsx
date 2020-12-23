/**
 * Button.tsx
 * developed by Hasan Alawneh.
 * A file that shows a Button component.
 * created at: 21/12/2020
 */

import React from 'react';
import {
    TextStyle,
    ViewStyle
} from 'react-native';
import styles from './styles';
import { Button as RNPaperBtn } from 'react-native-paper';
/**
 * type checking
 */
interface ButtonProps {
    title: string;

    labelStyle?: TextStyle;
    style?: ViewStyle;
    mode?: 'text' | 'outlined' | 'contained';
    uppercase?: boolean;
    onPress?: () => void;
};

/**
 * A function component that shows a Button.
 */
function Button({
    mode = 'outlined',
    title,
    labelStyle,
    style: overrideStyle,
    uppercase = true,
    onPress
}: ButtonProps) {
    return (<RNPaperBtn

        {...{} as any}

        style={
            [
                styles.btn,
                overrideStyle
            ]
        }
        mode={mode}
        labelStyle={labelStyle}
        uppercase={uppercase}
        onPress={onPress}
    >
        {title}
    </RNPaperBtn>);
};

/**
 * export as default.
 */
export default Button;