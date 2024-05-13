/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import React from 'react';
import {Button, ButtonIcon} from '@gluestack-ui/themed';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {ChevronDownIcon} from '@gluestack-ui/themed';
import {ButtonText} from '@gluestack-ui/themed';

const FilterButton = ({
  width = scale(102),
  height = verticalScale(33),
  title = 'Button Text',
  icon,
  onPress = () => {},
  active,
}) => {
  return (
    <Button
      variant="solid"
      action="primary"
      w={width}
      h={height}
      alignSelf="center"
      backgroundColor={active ? '$primary' : '$secondary'}
      borderRadius={'$lg'}
      marginVertical={'$2'}
      $active-bg="$primary"
      onPress={onPress}>
      <ButtonText
        color={'$textPrimary'}
        fontSize={moderateScale(12)}
        fontWeight="500">
        {title}
      </ButtonText>
      <ButtonIcon as={ChevronDownIcon} ml={'$1'} />
    </Button>
  );
};

export default FilterButton;

const styles = StyleSheet.create({});
