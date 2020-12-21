/**
 * Input.tsx
 * developed by Hasan Alawneh.
 * A file that shows a Input component.
 * created at: 21/12/2020
 */

import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { TextInput } from 'react-native-paper';

/**
 * type checking
 */
interface InputProps {
    label: string;
    onChangeText: (val: string) => void;
    value: string;
};

/**
 * A function component that shows a Input.
 */
function Input({
    label,
    onChangeText,
    value
}: InputProps) {
    return (<TextInput

        /**
         * this to resolve typescript issue.
         */
        {...{} as any}

        label={label}
        style={styles.input}
        numberOfLines={1}
        onChangeText={onChangeText}
        value={value}
    />);
};

/**
 * export as default.
 */
export default Input;