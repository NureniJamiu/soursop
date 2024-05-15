import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {
  FormControl,
  Text,
  Input,
  InputField,
  SearchIcon,
} from '@gluestack-ui/themed';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {Icon} from '@gluestack-ui/themed';
import {HStack} from '@gluestack-ui/themed';

const CustomSearchInput = ({
  type = 'text',
  color = '$textSecondary',
  error = '',
  h = verticalScale(45),
  mx,
  keyboardType,
  borderRadius = '$4xl',
  placeholder = 'Search',
  ...rest
}) => {
  const [showIcon, setShowIcon] = useState(true);
  return (
    <FormControl marginVertical={verticalScale(10)}>
      <Input
        borderColor="$inputBackground"
        $focus={{
          borderColor: '$textSecondary',
        }}
        h={h}
        borderRadius={borderRadius || '$xl'}
        bg="$inputBackground"
        mx={mx}>
        <HStack
          paddingVertical={'$0.5'}
          paddingHorizontal={'$4'}
          w="100%"
          alignItems="center">
          {showIcon && <Icon as={SearchIcon} color="$textDark500" />}
          <InputField
            type={type}
            placeholder={placeholder}
            color={color}
            fontWeight="600"
            fontSize={moderateScale(18)}
            keyboardType={keyboardType}
            autoCorrect={false}
            onFocus={() => setShowIcon(false)}
            onBlur={() => setShowIcon(true)}
            keyboardAppearance="dark"
            {...rest}
          />
        </HStack>
      </Input>

      {error && <Text color="$red500">{error}</Text>}
    </FormControl>
  );
};

export default CustomSearchInput;

const styles = StyleSheet.create({});
