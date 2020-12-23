/**
 * Input.tsx
 * developed by Hasan Alawneh.
 * A file that shows a Input component.
 * created at: 21/12/2020
 */

import React, { forwardRef } from 'react';
import styles, { theme } from './styles';
import {
    TextInput,
    HelperText
} from 'react-native-paper';
import { TextStyle } from 'react-native';

/**
 * type checking
 */
interface InputProps {
    label: string;
    onChangeText: (val: string) => void;

    value?: string;
    secureTextEntry?: boolean;
    style?: TextStyle;
    errorMessage?: string;
    onSubmitEditing?: (val: string) => void;
};

/**
 * A function component that shows a Input.
 */
function Input(
    {
        label,
        onChangeText,
        value,
        secureTextEntry,
        style: overrideTextStyle,
        errorMessage,
        onSubmitEditing
    }: InputProps,
    ref: any
) {
    return (
        <React.Fragment>
            <TextInput

                /**
                 * this to resolve typescript issue.
                 */
                {...{} as any}

                theme={theme}
                label={label}
                style={[
                    styles.input,
                    overrideTextStyle
                ]}
                numberOfLines={1}
                onChangeText={onChangeText}
                value={value}
                secureTextEntry={secureTextEntry}
                error={errorMessage}
                ref={ref}
                onSubmitEditing={e => onSubmitEditing && onSubmitEditing(e.nativeEvent.text)}
            />

            {
                errorMessage != undefined &&
                (<HelperText

                    {...{} as any}
                    
                    style={styles.errorMessage}
                    type="error"
                    padding='none'
                    visible
                >
                    {errorMessage}
                </HelperText>)
            }
        </React.Fragment>
    );
};

/**
 * export as default.
 */
export default forwardRef(Input);