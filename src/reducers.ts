/**
 * Combine all reducers in this file and export the combined reducers.
 */

import {combineReducers} from 'redux';
import UserReducer from './screens/SignIn/reducer';

//  import languageProviderReducer from 'providers/LanguageProvider/reducer';

// function lastAction(state = null, action: string) {
//   return action;
// }

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    //  language: languageProviderReducer,
    app: UserReducer,
    ...injectedReducers,
    // lastAction,
  });
  return rootReducer;
}
