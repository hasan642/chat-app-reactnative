/**
 * PaperIcon.tsx
 * developed by Hasan Alawneh.
 * A file that shows a PaperIcon component.
 * created at: 21/12/2020
 */

import React from 'react';
import { IconButton } from 'react-native-paper';
import {
    COLOR,
    scaleSize
} from 'theme';
import { ViewStyle } from 'react-native';
import styles from './styles';

/**
 * type checking
 */
interface PaperIconProps {
    icon: string;
    
    onPress?: () => void;
    size?: number;
    style?: ViewStyle;
};

/**
 * A function component that shows a PaperIcon.
 */
function PaperIcon({
    icon,
    onPress,
    size = scaleSize(24),
    style
}: PaperIconProps) {
    return (<IconButton

        {...{} as any}

        style={[
            styles.icon,
            style
        ]}
        icon={icon}
        size={size}
        color={COLOR.royalBlue}
        onPress={onPress}
    />);
};

/**
 * export as default.
 */
export default PaperIcon;