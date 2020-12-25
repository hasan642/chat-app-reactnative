/**
 * reactotronConfig.ts
 * developed by Hasan Alawneh.
 * A file that contains a reactotron config.
 * created at: 25/12/2020
 */

import { NativeModules } from "react-native";
import Reactotron, {
    trackGlobalErrors
} from 'reactotron-react-native'
import RNAsyncStorage from '@react-native-community/async-storage';

/**
 * Setup reactotron config.
 */
export default function setupReactotronConfig() {

    /**
     * grabs the ip address, to run physical Android device.
     */
    const scriptURL = NativeModules.SourceCode.scriptURL;
    const scriptHostname = scriptURL.split('://')[1].split(':')[0];

    /**
     * configure "Reactotron".
     */
    Reactotron
        .configure({ host: scriptHostname })
        .use(trackGlobalErrors(null))
        .setAsyncStorageHandler(RNAsyncStorage)
        .useReactNative({
            storybook: true
        })
        .connect();

};