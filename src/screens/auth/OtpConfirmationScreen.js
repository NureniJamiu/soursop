import {Alert, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import SafePageContainer from '../../components/containers/SafePageContainer';
import AuthHeader from '../../components/headers/AuthHeader';
import {
  Box,
  HStack,
  KeyboardAvoidingView,
  Text,
  useToast,
} from '@gluestack-ui/themed';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Toast from 'react-native-toast-message';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SCREENS} from '../../navigation/screenNames';

const OtpConfirmationScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {reset} = route.params;
  const [code, setCode] = useState('');
  const toast = useToast();

  return (
    <SafePageContainer>
      <Box marginVertical="$8">
        <AuthHeader title="Confirm OTP" />
        <KeyboardAvoidingView
          behavior="padding" // Or "height" depending on your preference
          keyboardVerticalOffset={verticalScale(30)} // Adjust as needed
        >
          <Box px={'$6'} my={'$6'}>
            <Text color="$textSecondary" textAlign="center">
              Verify your email address by confirming the OTP sent to your email
              address
            </Text>
          </Box>
          <Box mt={'$24'} px={'$8'}>
            <SmoothPinCodeInput
              codeLength={6}
              cellStyle={styles.cellStyle}
              cellStyleFocused={styles.cellStyleFocused}
              textStyle={styles.textStyle}
              textStyleFocused={styles.textStyleFocused}
              value={code}
              onTextChange={setCode}
              containerStyle={styles.containerStyle}
              onFulfill={input => {
                Toast.show({
                  type: 'success',
                  text1: 'Nice',
                  text2: input,
                  onHide: () => {
                    if (reset) {
                      navigation.navigate(SCREENS.auth.resetPassword);
                    } else {
                      navigation.navigate(SCREENS.auth.congrats);
                    }
                  },
                });
              }}
            />
          </Box>
          <HStack alignItems="center" justifyContent="center" my={'$48'}>
            <Text color="$textPrimary">Resend code </Text>
            <Text color="$textSecondary">00.30</Text>
          </HStack>
        </KeyboardAvoidingView>
      </Box>
    </SafePageContainer>
  );
};

export default OtpConfirmationScreen;

const styles = StyleSheet.create({
  cellStyle: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#F7D098',
    backgroundColor: '#3C3C3C',
    height: verticalScale(60),
    width: scale(50),
  },
  cellStyleFocused: {},
  textStyle: {
    fontSize: 32,
    color: '#F7D098',
    fontWeight: '600',
  },
  textStyleFocused: {
    color: 'crimson',
  },
  containerStyle: {
    alignSelf: 'center',
  },
});
