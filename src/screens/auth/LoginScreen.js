import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import SafePageContainer from '../../components/containers/SafePageContainer';
import {Box, HStack, Text} from '@gluestack-ui/themed';
import CustomInput from '../../components/inputs/CustomInput';
import {scale, verticalScale} from 'react-native-size-matters';
import CustomFormBox from '../../components/containers/CustomFormBox';
import FlatButton from '../../components/buttons/FlatButton';
import {SCREENS} from '../../navigation/screenNames';
import {useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';
import {loginSchema} from '../../schema/authSchemas';
import AuthHeader from '../../components/headers/AuthHeader';

const LoginScreen = () => {
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: values => {
      // Your form submission logic goes here
      console.log('Form submitted with values:', values);
      // You can navigate or perform other actions based on the form data

      navigation.navigate(SCREENS.navigators.home);
      // navigation.navigate(SCREENS.home.dashboard);
    },
  });

  return (
    <SafePageContainer>
      <Box marginVertical={'$12'}>
        <AuthHeader title="Login" />

        <Text color="$textPrimary" textAlign="center" mt="$8">
          Welcome back
        </Text>
      </Box>
      <CustomFormBox h={verticalScale(400)} ph={scale(16)}>
        <CustomInput
          keyboardType="email-address"
          label="Email address"
          onChangeText={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          value={formik.values.email}
          error={formik.touched.email && formik.errors.email}
        />
        <CustomInput
          type="password"
          label="Password"
          onChangeText={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
          value={formik.values.password}
          error={formik.touched.password && formik.errors.password}
        />

        <Box mt={'$12'}>
          <FlatButton title="Login" onPress={formik.handleSubmit} />
          <FlatButton
            variant="link"
            title="Forgot password"
            bgColor="$background"
            borderColor="$background"
            color="$textPrimary"
            onPress={() => navigation.navigate(SCREENS.auth.forgotPassword)}
          />
        </Box>
      </CustomFormBox>

      <HStack justifyContent="center" mt={'$16'}>
        <Text color="$textPrimary">Yet to create an account?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(SCREENS.auth.signUp)}>
          <Text
            ml={scale(8)}
            textDecorationLine="underline"
            fontWeight="600"
            color="$textSecondary">
            Sign up
          </Text>
        </TouchableOpacity>
      </HStack>
    </SafePageContainer>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
