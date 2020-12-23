/**
 * LoginScreen.tsx
 * developed by Hasan Alawneh.
 * A file that shows a LoginScreen component.
 * created at: 21/12/2020
 */

import React, {
    useEffect,
    useRef
} from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';
import { Title } from 'react-native-paper';
import {
    Input,
    Button
} from 'components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginFormValidator } from 'utils';
import { NavigationComponentProps } from 'react-native-navigation';
import { pushToStack } from 'navigation';

/**
 * type checking.
 */
interface LoginScreenProps extends NavigationComponentProps {

};
type FormInputs = {
    email: string;
    password: string;
};

/**
 * A function component that shows a LoginScreen.
 */
function LoginScreen({ componentId }: LoginScreenProps) {

    /**
     * refs.
     */
    const passwordInput = useRef<TextInput>(null);

    /**
     * init react hooks form valifation.
     */
    const {
        register,
        unregister,
        setValue,
        handleSubmit,
        errors
    } = useForm<FormInputs>({
        resolver: yupResolver(loginFormValidator()),
    });

    /**
     * Registeres inputs for validation.
     */
    useEffect(
        () => {
            register('email');
            register('password');

            /**
             * clean up function.
             */
            return () => {
                unregister('email');
                unregister('password');
            };
        },
        []
    );

    /**
     * Focuses on password input.
     */
    const focusOnPasswordInput = () => {
        passwordInput.current.focus()
    };

    /**
     * Handles submit for login.
     */
    const onSubmit = (payload: FormInputs) => {
        console.log({ payload });
    };

    /**
     * Navigates to signup screen.
     */
    const navigateToSignup = () => {
        pushToStack(
            componentId,
            'SIGNUP_SCRREN'
        );
    };

    return (<View style={styles.container}>
        <Title style={styles.titleText}>
            {'Welcome to Chat app'}
        </Title>
        <Input
            label='Email'
            onChangeText={email => setValue('email', email)}
            onSubmitEditing={focusOnPasswordInput}
            errorMessage={errors.email && errors.email.message}
        />
        <Input
            ref={passwordInput}
            label='Password'
            secureTextEntry
            onChangeText={password => setValue('password', password)}
            style={styles.passwordInput}
            errorMessage={errors.password && errors.password.message}
        />
        <Button
            title='Login'
            mode='contained'
            labelStyle={styles.loginButtonLabel}
            style={styles.loginBtnStyle}
            onPress={handleSubmit(onSubmit)}
        />
        <Button
            onPress={navigateToSignup}
            title='New user? Join here'
            mode='text'
            uppercase={false}
            labelStyle={styles.navButtonText}
        />
    </View>);
};

/**
 * export as default.
 */
export default LoginScreen;