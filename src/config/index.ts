/**
 * reactotronConfig.ts
 * developed by Hasan Alawneh.
 * This file includes function to init and setup every thing.
 * created at: 25/12/2020
 */

import setupReactotronConfig from './reactotronConfig';

/**
 * Setups every thing.
 */
export function init() {

    /**
     * setup reactotron if env is dev.
     */
    __DEV__ && setupReactotronConfig();
    
};