import {StyleSheet} from 'react-native';
import React from 'react';
import {Button, ButtonIcon} from '@gluestack-ui/themed';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {ChevronDownIcon} from '@gluestack-ui/themed';
import {ButtonText} from '@gluestack-ui/themed';

const CategoryButton = ({
  title = 'All',
  active = false,
  icon,
  onPress = () => {},
}) => {
  return (
    <Button
      variant="solid"
      action="primary"
      p={'$1.5'}
      alignSelf="center"
      backgroundColor={active || title === 'All' ? '$primary' : '$background'}
      borderColor="$inputBackground"
      $active-bg="$primary"
      borderRadius={'$full'}
      marginVertical={'$2'}
      borderWidth={1}
      onPress={onPress}>
      {icon && <ButtonIcon as={icon} mr="$2" color="$textDark600" />}

      <ButtonText
        color={active || title === 'All' ? '$textDark600' : '$textDark600'}
        fontSize={moderateScale(15)}
        fontWeight="500">
        {title}
      </ButtonText>
    </Button>
  );
};

export default CategoryButton;

const styles = StyleSheet.create({});
