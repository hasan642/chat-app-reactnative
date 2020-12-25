/**
 * SnackBar.tsx
 * developed by Hasan Alawneh.
 * A file that shows a SnackBar component.
 * created at: 21/12/2020
 */

import React, {
    forwardRef,
    useState,
    useEffect,
    MutableRefObject,
} from 'react';
import { Snackbar as RNSnackBar } from 'react-native-paper';
import styles from './styles';

/**
 * type checking
 */
export type SnackBarRef = {
    show: () => void;
    hide: () => void;
}
type SnackBarAction = {
    label: string;
    onPress: () => void;
};
interface SnackBarProps {
    message: string;
    action?: SnackBarAction;
    duration?: number;
};

/**
 * A function component that shows a SnackBar.
 */
function SnackBar(
    props: SnackBarProps,
    ref: MutableRefObject<SnackBarRef>
) {

    /**
     * grap the props.
     */
    const {
        message,
        action,
        duration = defaultDuration
    } = props;

    /**
     * state.
     */
    const [visible, setVisible] = useState<boolean>(false);

    /**
     * Assign function to ref.
     */
    useEffect(
        () => {

            /**
             * assign functions to ref.
             */
            ref.current = {
                show: () => toggleSnackBar('SHOW'),
                hide: () => toggleSnackBar('HIDE'),
            }
        },
        []
    );

    /**
     * Tpggles snack bar.
     */
    const toggleSnackBar = (action: 'SHOW' | 'HIDE') => {
        setVisible(action === 'SHOW');
    };

    /**
     * Handles on dismiss.
     */
    const onDismiss = () => {
        toggleSnackBar('HIDE');
    };

    return (<RNSnackBar

        {...{} as any}

        style={styles.snackBar}
        duration={duration}
        visible={visible}
        action={action}
        onDismiss={onDismiss}
    >
        {message}
    </RNSnackBar>);
};

/**
 * constants.
 */
const defaultDuration = 1500;

/**
 * export as default.
 */
export default forwardRef(SnackBar);