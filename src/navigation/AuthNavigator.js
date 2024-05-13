import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from './screenNames';
import LoginScreen from '../screens/auth/LoginScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import NextSignUpScreen from '../screens/auth/NextSignUpScreen';
import OtpConfirmationScreen from '../screens/auth/OtpConfirmationScreen';
import CongratulationsScreen from '../screens/auth/CongratulationsScreen';
// import AgeConfirmationScreen from '../screens/auth/AgeConfirmationScreen';
// import PasswordChangedScreen from '../screens/auth/PasswordChangedScreen';
// import CheckInboxScreen from '../screens/auth/CheckInboxScreen';
// import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
// import ResetPasswordScreen from '../screens/auth/ResetPasswordScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SCREENS.auth.login} component={LoginScreen} />
      <Stack.Screen name={SCREENS.auth.signUp} component={SignUpScreen} />
      <Stack.Screen
        name={SCREENS.auth.nextSignUp}
        component={NextSignUpScreen}
      />
      <Stack.Screen
        name={SCREENS.auth.confirmOTP}
        component={OtpConfirmationScreen}
      />
      <Stack.Screen
        name={SCREENS.auth.congrats}
        component={CongratulationsScreen}
      />
      {/* <Stack.Screen
        name={SCREENS.auth.ageConfirmation}
        component={AgeConfirmationScreen}
      /> */}
      {/* <Stack.Screen
        name={SCREENS.auth.changedPassword}
        component={PasswordChangedScreen}
      />
      <Stack.Screen
        name={SCREENS.auth.checkInbox}
        component={CheckInboxScreen}
      />
      <Stack.Screen
        name={SCREENS.auth.confirmOTP}
        component={OtpConfirmationScreen}
      />
      <Stack.Screen
        name={SCREENS.auth.congrats}
        component={CongratulationsScreen}
      />
      <Stack.Screen
        name={SCREENS.auth.forgotPassword}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name={SCREENS.auth.resetPassword}
        component={ResetPasswordScreen}
      /> */}
    </Stack.Navigator>
  );
};

export default AuthNavigator;
