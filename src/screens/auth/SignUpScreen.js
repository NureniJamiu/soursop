import {Keyboard, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import SafePageContainer from '../../components/containers/SafePageContainer';
import {
  Box,
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  Link,
  Progress,
  Text,
} from '@gluestack-ui/themed';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import CustomFormBox from '../../components/containers/CustomFormBox';
import CustomInput from '../../components/inputs/CustomInput';
import FlatButton from '../../components/buttons/FlatButton';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../navigation/screenNames';
import {HStack} from '@gluestack-ui/themed';
import {useFormik} from 'formik';
import {signUpValidationSchema} from '../../schema/authSchemas';

import AuthHeader from '../../components/headers/AuthHeader';

const SignUpScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    validationSchema: signUpValidationSchema,
    onSubmit: values => {
      // Your form submission logic goes here
      console.log('Form submitted with values:', values);
      // You can navigate or perform other actions based on the form data
      navigation.navigate(SCREENS.navigators.auth, {
        screen: SCREENS.auth.nextSignUp,
      });
    },
    enableReinitialize: true,
  });

  return (
    <SafePageContainer>
      <Box marginVertical={'$8'}>
        <AuthHeader title="Personal Details" />

        <Box>{/* Remember to add a progress bar */}</Box>
      </Box>
      <CustomFormBox ph={scale(16)} scroll>
        <CustomInput
          type="text"
          label="First name"
          onChangeText={formik.handleChange('firstName')}
          onBlur={formik.handleBlur('firstName')}
          value={formik.values.firstName}
          error={formik.touched.firstName && formik.errors.firstName}
        />
        <CustomInput
          type="text"
          label="Last name"
          onChangeText={formik.handleChange('lastName')}
          onBlur={formik.handleBlur('lastName')}
          value={formik.values.lastName}
          error={formik.touched.lastName && formik.errors.lastName}
        />
        <CustomInput
          type="text"
          label="Email address"
          onChangeText={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          keyboardType="email-address"
          value={formik.values.email}
          error={formik.touched.email && formik.errors.email}
        />

        <CustomInput
          type="text"
          label="Create password"
          onChangeText={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
          value={formik.values.password}
          error={formik.touched.password && formik.errors.password}
          secureTextEntry={true}
          textContentType="oneTimeCode"
        />
        <CustomInput
          type="text"
          label="Confirm password"
          onChangeText={formik.handleChange('retypePassword')}
          onBlur={formik.handleBlur('retypePassword')}
          value={formik.values.retypePassword}
          error={formik.touched.retypePassword && formik.errors.retypePassword}
          secureTextEntry={true}
          textContentType="oneTimeCode"
        />
        <Box mb={'$4'} mt={verticalScale(24)} px="$4">
          <FlatButton
            title="Next"
            color="$textPrimary"
            bgColor="$inputBackground"
            borderColor="$inputBackground"
            onPress={formik.handleSubmit}
          />
        </Box>
        <HStack justifyContent="center" mb={'$24'}>
          <Text color="$textPrimary">Already have an account?</Text>
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
      </CustomFormBox>
    </SafePageContainer>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
