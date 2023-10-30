import React from 'react';
import {Provider} from 'react-redux';
// import { LanguageProvider } from 'providers/LanguageProvider';
// import { SafeAreaProvider } from 'react-native-safe-area-context';

import {AuthProvider} from '../AppProviders/AuthProvider';
// import AlertsProvider from 'providers/AlertsProvider';

import configureStore from '../../configureStore';

// import { useColorScheme } from 'react-native';

const initialState = {};
export const store = configureStore(initialState);

export type IAppProvidersProps = {};

const AppProviders: React.FC<IAppProvidersProps> = ({children}) => {
  // const scheme = useColorScheme();

  return (
    <Provider store={store}>
      {/* <LanguageProvider>
        <SafeAreaProvider>
          <AlertsProvider>
            <ThemeProvider> */}
      <AuthProvider>{children}</AuthProvider>
      {/* </ThemeProvider>
          </AlertsProvider>
        </SafeAreaProvider>
      </LanguageProvider> */}
    </Provider>
  );
};

export {AppProviders};
