import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Button, ButtonSpinner, ButtonText} from '@gluestack-ui/themed';
import {ButtonIcon} from '@gluestack-ui/themed';

const FlatButton = ({
  isLoading = false,
  width = '100%',
  color = '$textPrimary',
  borderColor = '$primary',
  bgColor = '$tertiary',
  height = verticalScale(49),
  title = 'Button Text',
  icon,
  variant,
  fontWeight,
  onPress = () => {},
  fontSize = moderateScale(16),
  iconRight,
  ...rest
}) => {
  return (
    <Button
      variant={variant || 'solid'}
      action="primary"
      w={width}
      h={height}
      alignSelf="center"
      borderWidth={1}
      borderColor={borderColor}
      backgroundColor={bgColor}
      borderRadius={'$4xl'}
      marginVertical={'$2'}
      $active-bg={bgColor == '$primary' && '$orange200'}
      onPress={onPress}
      {...rest}>
      {isLoading ? (
        <ButtonSpinner />
      ) : (
        <>
          {icon && <ButtonIcon as={icon} mr={'$2'} color={color} />}
          <ButtonText
            color={color}
            fontSize={fontSize}
            fontWeight={fontWeight || '500'}>
            {title}
          </ButtonText>
          {iconRight && <ButtonIcon as={iconRight} ml={'$1'} color={color} />}
        </>
      )}
    </Button>
  );
};

export default FlatButton;

const styles = StyleSheet.create({});
