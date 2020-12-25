/**
 * LoginScreen.tsx
 * developed by Hasan Alawneh.
 * A file that shows a LoginScreen component.
 * created at: 21/12/2020
 */

import React, {
    useEffect,
    useRef,
    useState
} from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';
import { Title } from 'react-native-paper';
import {
    Input,
    Button,
    SnackBar
} from 'components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginFormValidator } from 'utils';
import { NavigationComponentProps, Options } from 'react-native-navigation';
import { pushToStack } from 'navigation';
import { useDispatch, useSelector } from 'react-redux';
import {
    login,
    userSelector
} from 'redux/slices/userSlice';
import { translate } from 'i18n';
import { SnackBarRef } from 'components/SnackBar/SnackBar';
import { resetUserState } from 'redux/slices';

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
     * state.
     */
    const [errorMessage, setErrorMessage] = useState<string>(null);

    /**
     * refs.
     */
    const passwordInput = useRef<TextInput>(null);
    const snackBarRef = useRef<SnackBarRef>(null);

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
     * User redux dispatch.
     */
    const dispatch = useDispatch();

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
     * select data from user selector.
     */
    const {
        loading,
        error
    } = useSelector(userSelector);

    /**
     * Listenes to error and success cases.
     */
    useEffect(
        () => {
            if (error) {
                setErrorMessage(error);
                snackBarRef.current.show();
            };
        },
        [error]
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
    const onSubmit = ({ email, password }: FormInputs) => {
        dispatch(login(email, password));
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
            {translate('common.welcomeToChatsy')}
        </Title>
        <Input
            label={translate('common.email')}
            onChangeText={email => setValue('email', email)}
            onSubmitEditing={focusOnPasswordInput}
            errorMessage={errors.email && errors.email.message}
        />
        <Input
            ref={passwordInput}
            label={translate('common.password')}
            secureTextEntry
            onChangeText={password => setValue('password', password)}
            style={styles.passwordInput}
            errorMessage={errors.password && errors.password.message}
        />
        <Button
            title={translate('loginScreen.login')}
            mode='contained'
            labelStyle={styles.loginButtonLabel}
            style={styles.loginBtnStyle}
            onPress={handleSubmit(onSubmit)}
            loading={loading}
            disabled={loading}
        />

        <Button
            onPress={navigateToSignup}
            title={translate('loginScreen.newUser')}
            mode='text'
            uppercase={false}
            labelStyle={styles.navButtonText}
        />

        <SnackBar
            message={errorMessage}
            ref={snackBarRef}
        />
    </View>);
};

/**
 * custom navigation options.
 */
LoginScreen.options = {
    topBar: {
        visible: false
    }
} as Options;

/**
 * export as default.
 */
export default LoginScreen;