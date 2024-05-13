import {Keyboard, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import SafePageContainer from '../../components/containers/SafePageContainer';
import {Box, Text} from '@gluestack-ui/themed';
import {scale, verticalScale} from 'react-native-size-matters';
import CustomFormBox from '../../components/containers/CustomFormBox';
import CustomInput from '../../components/inputs/CustomInput';
import FlatButton from '../../components/buttons/FlatButton';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../navigation/screenNames';
import {HStack} from '@gluestack-ui/themed';
import {useFormik} from 'formik';
import {businessSignUpValidationSchema} from '../../schema/authSchemas';

import AuthHeader from '../../components/headers/AuthHeader';

const NextSignUpScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const formik = useFormik({
    initialValues: {
      businessName: '',
      businessEmailAddress: '',
      businessPhoneNumber: '',
      businessAddress: '',
    },
    validationSchema: businessSignUpValidationSchema,
    onSubmit: values => {
      // Your sign-up submission logic goes here
      // setIsLoading(true)
      console.log('Form submitted with values:', values);
      navigation.navigate(SCREENS.auth.confirmOTP, {reset: false});
    },
    enableReinitialize: true,
  });

  return (
    <SafePageContainer>
      <Box marginVertical={'$8'}>
        <AuthHeader title="Business Details" />

        <Box>{/* Remember to add a progress bar */}</Box>
      </Box>
      <CustomFormBox ph={scale(16)} scroll>
        <CustomInput
          type="text"
          label="Business name"
          onChangeText={formik.handleChange('businessName')}
          onBlur={formik.handleBlur('businessName')}
          value={formik.values.businessName}
          error={formik.touched.businessName && formik.errors.businessName}
        />
        <CustomInput
          type="text"
          label="Business email address"
          onChangeText={formik.handleChange('businessEmailAddress')}
          onBlur={formik.handleBlur('businessEmailAddress')}
          keyboardType="email-address"
          value={formik.values.businessEmailAddress}
          error={
            formik.touched.businessEmailAddress &&
            formik.errors.businessEmailAddress
          }
        />

        <CustomInput
          type="text"
          label="Business phone number"
          onChangeText={formik.handleChange('businessPhoneNumber')}
          onBlur={formik.handleBlur('businessPhoneNumber')}
          value={formik.values.businessPhoneNumber}
          error={
            formik.touched.businessPhoneNumber &&
            formik.errors.businessPhoneNumber
          }
        />
        <CustomInput
          type="text"
          label="Business address"
          onChangeText={formik.handleChange('businessAddress')}
          onBlur={formik.handleBlur('businessAddress')}
          value={formik.values.businessAddress}
          error={
            formik.touched.businessAddress && formik.errors.businessAddress
          }
        />
        <Box mb={'$4'} mt={verticalScale(24)} px="$4">
          <FlatButton
            title="Sign up"
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

export default NextSignUpScreen;

const styles = StyleSheet.create({});
