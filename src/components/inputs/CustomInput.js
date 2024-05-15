import {Platform, StyleSheet, View} from 'react-native';
import React from 'react';
import {
  FormControl,
  Text,
  FormControlLabelText,
  Input,
  InputField,
  VStack,
  FormControlLabel,
  KeyboardAvoidingView,
} from '@gluestack-ui/themed';
import {moderateScale, verticalScale} from 'react-native-size-matters';

const CustomInput = ({
  type = 'text',
  color = '$textPrimary',
  label,
  labelColor = '$textPrimary',
  error = '',
  h = verticalScale(47),
  mx,
  keyboardType,
  borderRadius,
  ...rest
}) => {
  return (
    <FormControl marginVertical={verticalScale(8)}>
      <Input
        borderColor="$inputBackground"
        $focus={{
          borderColor: '$textPrimary',
        }}
        h={h}
        borderRadius={borderRadius || '$xl'}
        bg="$textPrimary"
        mx={mx}>
        <VStack paddingVertical={'$0.5'} paddingHorizontal={'$4'} w="100%">
          {label && (
            <FormControlLabel mb="$0.5">
              <FormControlLabelText color={labelColor}>
                {label}
              </FormControlLabelText>
            </FormControlLabel>
          )}
          <InputField
            type={type}
            placeholder=""
            color={color}
            fontWeight="600"
            fontSize={moderateScale(16)}
            keyboardType={keyboardType}
            autoCorrect={false}
            keyboardAppearance="dark"
            {...rest}
          />
        </VStack>
      </Input>

      {error && <Text color="$red500">{error}</Text>}
    </FormControl>
  );
};

export default CustomInput;

const styles = StyleSheet.create({});
