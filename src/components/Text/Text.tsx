/**
 * Text.tsx
 * developed by Hasan Alawneh.
 * A file that shows a Text component.
 * created at: 21/12/2020
 */

import React, { ReactNode } from 'react';
import {
    Text as RNText,
    TextStyle
} from 'react-native';
import styles from './styles';

/**
 * type checking
 */
interface TextProps {
    children: string | ReactNode;
    style?: TextStyle;
};

/**
 * A function component that shows a Text.
 */
function Text({
    children,
    style: overrideTextStyle
}: TextProps) {
    return (<RNText
        style={[
            styles.txt,
            overrideTextStyle
        ]}
    >
        {children}
    </RNText>);
};

/**
 * export as default.
 */
export default Text;