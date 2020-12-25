/**
 * AddRoomScreen.tsx
 * developed by Hasan Alawneh.
 * A file that shows a AddRoomScreen component.
 * created at: 21/12/2020
 */

import React, {
    useState,
    useEffect
} from 'react';
import { View } from 'react-native';
import styles from './styles';
import {
    Button,
    PaperIcon,
    Input
} from 'components';
import { toggleModal } from 'navigation';
import { NavigationComponentProps } from 'react-native-navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { scaleSize } from 'theme';
import { Title } from 'react-native-paper';
import { translate } from 'i18n';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addRoomValidator } from 'utils';

/**
 * type checking
 */
interface AddRoomScreenProps extends NavigationComponentProps {

};
type FormInputs = {
    roomName: string;
};

/**
 * A function component that shows a AddRoomScreen.
 */
function AddRoomScreen({ componentId }: AddRoomScreenProps) {

    /**
     * state.
     */
    const [addingRoom, setAddingRoom] = useState<boolean>(false);

    /**
     * init react hooks form valifation.
     */
    const {
        register,
        unregister,
        setValue,
        handleSubmit,
        errors,
        watch
    } = useForm<FormInputs>({
        resolver: yupResolver(addRoomValidator()),
    });

    /**
     * to access values when text changes.
     */
    const { roomName: roomNameValue } = watch();

    /**
     * Registeres room name input to be validated.
     */
    useEffect(
        () => {
            register('roomName');

            /**
             * clean up function.
             */
            return () => {
                unregister('roomName');
            };
        },
        []
    );

    /**
     * Handles add room press.
     */
    const handleAddRoomPress = ({ roomName }: FormInputs) => {
        console.log({ payload: roomName });
    };

    return (<SafeAreaView
        edges={['top']}
        style={styles.container}
    >
        <PaperIcon
            icon={'close-circle'}
            onPress={() => toggleModal({
                action: 'HIDE',
                componentId
            })}
            size={scaleSize(30)}
        />

        <View style={styles.innerContainer}>
            <Title style={styles.title}>
                {translate('addRoomScreen.createRoom')}
            </Title>
            <Input
                label={translate('addRoomScreen.roomName')}
                onChangeText={(roomName) => { setValue('roomName', roomName) }}
                onSubmitEditing={() => handleSubmit(handleAddRoomPress)()}
                errorMessage={errors.roomName && errors.roomName.message}
            />
            <Button
                title={translate('common.create')}
                onPress={handleSubmit(handleAddRoomPress)}
                loading={addingRoom}
                disabled={!roomNameValue || addingRoom}
                mode='contained'
                style={styles.btn}
            />
        </View>

    </SafeAreaView>);
};

/**
 * export as default.
 */
export default AddRoomScreen;