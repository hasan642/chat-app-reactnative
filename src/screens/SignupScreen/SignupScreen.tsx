/**
 * SignupScreen.tsx
 * developed by Hasan Alawneh.
 * A file that shows a SignupScreen component.
 * created at: 23/12/2020
 */

import React, {
    useRef,
    useEffect,
    useState
} from 'react';
import {
    View,
    TextInput
} from 'react-native';
import styles from './styles';
import { NavigationComponentProps } from 'react-native-navigation';
import { Title, IconButton } from 'react-native-paper';
import {
    Input,
    Button,
    SnackBar
} from 'components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupFormValidator } from 'utils';
import { goBack } from 'navigation';
import { COLOR, scaleSize } from 'theme';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import { signup, userSelector } from 'redux/slices/userSlice';
import { translate } from 'i18n';
import { SnackBarRef } from 'components/SnackBar/SnackBar';

/**
 * type checking
 */
interface SignupScreenProps extends NavigationComponentProps {

};
type FormInputs = {
    email: string;
    password: string;
};

/**
 * A function component that shows a SignupScreen.
 */
function SignupScreen({ componentId }: SignupScreenProps) {

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
        errors,
    } = useForm<FormInputs>({
        resolver: yupResolver(signupFormValidator()),
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
     * Use dispatch.
     */
    const dispatch = useDispatch();

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
        dispatch(signup(email, password));
    };

    /**
     * Backs to login.
     */
    const backToLogin = () => {
        goBack(componentId);
    };

    return (<View style={styles.container}>
        <Title style={styles.titleText}>
            {translate('signupScreen.registerToChat')}
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
            title={translate('signupScreen.signup')}
            mode='contained'
            labelStyle={styles.loginButtonLabel}
            style={styles.loginBtnStyle}
            onPress={handleSubmit(onSubmit)}
            loading={loading}
            disabled={loading}
        />
        <IconButton

            {...{} as any}

            icon='keyboard-backspace'
            size={scaleSize(28)}
            style={styles.backIcon}
            color={COLOR.royalBlue}
            onPress={backToLogin}
        />

        <SnackBar
            message={errorMessage}
            ref={snackBarRef}
        />
    </View>);
};

/**
 * export as default.
 */
export default SignupScreen;