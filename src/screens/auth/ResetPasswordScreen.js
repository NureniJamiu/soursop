import {StyleSheet} from 'react-native';
import React from 'react';
import SafePageContainer from '../../components/containers/SafePageContainer';
import AuthHeader from '../../components/headers/AuthHeader';
import {Box, Text} from '@gluestack-ui/themed';
import {moderateScale, scale} from 'react-native-size-matters';
import CustomFormBox from '../../components/containers/CustomFormBox';
import {useFormik} from 'formik';
import {resetPasswordSchema} from '../../schema/authSchemas';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../navigation/screenNames';
import CustomInput from '../../components/inputs/CustomInput';
import FlatButton from '../../components/buttons/FlatButton';

const ResetPasswordScreen = () => {
  const navigation = useNavigation();
  const formik = useFormik({
    initialValues: {
      password: '',
      retypePassword: '',
    },
    validationSchema: resetPasswordSchema,
    onSubmit: values => {
      // Your sign-up submission logic goes here
      console.log('Form submitted with values:', values);
      // You can navigate or perform other actions based on the form data
      navigation.navigate(SCREENS.auth.changedPassword);
    },
    enableReinitialize: true,
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
          Reset password
        </Text>
        <Text
          mx={'$20'}
          mt={'$2'}
          color="$textSecondary"
          fontSize={moderateScale(16)}
          textAlign="center"
          fontWeight="$semibold"
          lineHeight={'$md'}>
          Create a new password you’ll easily remember
        </Text>
      </Box>
      <CustomFormBox ph={scale(16)}>
        <CustomInput
          type="text"
          label="Password"
          onChangeText={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
          value={formik.values.password}
          error={formik.touched.password && formik.errors.password}
          secureTextEntry={true}
          textContentType="oneTimeCode"
        />
        <CustomInput
          type="text"
          label="Re-type password"
          onChangeText={formik.handleChange('retypePassword')}
          onBlur={formik.handleBlur('retypePassword')}
          value={formik.values.retypePassword}
          error={formik.touched.retypePassword && formik.errors.retypePassword}
          secureTextEntry={true}
          textContentType="oneTimeCode"
        />

        <Box mt="$10" px="$6">
          <FlatButton title="Reset password" onPress={formik.handleSubmit} />
        </Box>
      </CustomFormBox>
    </SafePageContainer>
  );
};

export default ResetPasswordScreen;

const styles = StyleSheet.create({});
