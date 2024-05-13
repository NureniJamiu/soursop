import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import SafePageContainer from '../../components/containers/SafePageContainer';
import AuthHeader from '../../components/headers/AuthHeader';
import {Text} from '@gluestack-ui/themed';
import {Box} from '@gluestack-ui/themed';
import {moderateScale, scale} from 'react-native-size-matters';
import {useFormik} from 'formik';
import {forgotPassSchema} from '../../schema/authSchemas';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../navigation/screenNames';
import CustomInput from '../../components/inputs/CustomInput';
import FlatButton from '../../components/buttons/FlatButton';
import {HStack} from '@gluestack-ui/themed';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: forgotPassSchema,
    onSubmit: values => {
      // Your form submission logic goes here
      console.log('Form submitted with values:', values);
      // You can navigate or perform other actions based on the form data
      navigation.navigate(SCREENS.auth.checkInbox, {
        email: formik.values.email,
      });
    },
  });
  return (
    <SafePageContainer>
      <AuthHeader />
      <Box marginVertical={'$12'}>
        <Text
          color="$textSecondary"
          fontSize={moderateScale(32)}
          textAlign="center"
          fontWeight="$semibold"
          lineHeight={'$2xl'}>
          Forgot Password?
        </Text>
        <Text
          mx={'$16'}
          mt={'$2'}
          color="$textSecondary"
          fontSize={moderateScale(16)}
          textAlign="center"
          fontWeight="$semibold"
          lineHeight={'$md'}>
          Please enter email associated with your password
        </Text>
      </Box>
      <Box px={'$4'}>
        <CustomInput
          keyboardType="email-address"
          label="Email"
          onChangeText={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          value={formik.values.email}
          error={formik.touched.email && formik.errors.email}
        />
        <Box mt={'$16'}>
          <FlatButton title="Send code" onPress={formik.handleSubmit} />
        </Box>
      </Box>
      <HStack justifyContent="center" mt={'$24'}>
        <Text color="$textPrimary">Remember password?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(SCREENS.auth.login)}>
          <Text
            ml={scale(8)}
            textDecorationLine="underline"
            fontWeight="600"
            color="$textSecondary">
            Login
          </Text>
        </TouchableOpacity>
      </HStack>
    </SafePageContainer>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({});
