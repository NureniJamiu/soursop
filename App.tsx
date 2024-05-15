import { GluestackUIProvider, Image, Text } from '@gluestack-ui/themed';
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { config } from './config/gluestack-ui.config';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast, {
  BaseToast,
  ErrorToast,
  InfoToast,
} from 'react-native-toast-message';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { ToastProvider } from 'react-native-toast-notifications'
import { Box } from '@gluestack-ui/themed';
import CustomToast from './src/components/CustomToast';


function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GluestackUIProvider config={config}>
        <ToastProvider
          offsetBottom={260}
          swipeEnabled={true}
          duration={100000}
          renderToast={(toastOptions) => <CustomToast options={toastOptions} />}
        >
          <SafeAreaProvider>
            <NavigationContainer>
              <AppNavigator />
              <Toast
                topOffset={verticalScale(50)}
                visibilityTime={6000}
                config={toastConfig}
              />
            </NavigationContainer>
          </SafeAreaProvider>
        </ToastProvider>
      </GluestackUIProvider>
    </GestureHandlerRootView>
  );
}

export default App;

const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: props => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: 'green', backgroundColor: '#3C3C3C' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: moderateScale(18),
        fontWeight: '600',
        color: '#F7D098',
      }}
      text2Style={{ color: '#F7D098', fontSize: moderateScale(15) }}
    />
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: props => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: 'red', backgroundColor: '#3C3C3C' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: moderateScale(18),
        fontWeight: '600',
        color: 'tomato',
      }}
      text2Style={{ color: 'tomato', fontSize: moderateScale(15) }}
    />
  ),

  info: props => (
    <InfoToast
      {...props}
      style={{ borderLeftColor: '#F7D098', backgroundColor: '#3C3C3C' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: moderateScale(18),
        fontWeight: '600',
        color: '#f7e19b',
      }}
      text2Style={{ color: '#f7e19b', fontSize: moderateScale(15) }}
    />
  ),
  /*
    Or create a completely new type - `tomatoToast`,
    building the layout from scratch.

    I can consume any custom `props` I want.
    They will be passed when calling the `show` method (see below)
  */
};