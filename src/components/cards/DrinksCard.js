import {ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {Box, Button, ButtonText, Text} from '@gluestack-ui/themed';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../navigation/screenNames';

const DrinksCard = () => {
  const navigation = useNavigation();

  return (
    <Box
      h={verticalScale(220)}
      w={scale(154)}
      bg="$secondary"
      borderRadius={moderateScale(12)}
      overflow="hidden">
      <ImageBackground
        style={styles.image}
        source={{
          uri: 'https://www.themanual.com/wp-content/uploads/sites/9/2020/01/wine-bottle-standard.jpg?p=1',
        }}></ImageBackground>
      <Box px={'$2'} pt={'$1'}>
        <Box flexDirection="row" mb={'$1'}>
          <Text fontSize={moderateScale(12)} color="$textGrey">
            Claim at{' '}
          </Text>
          <Text
            fontSize={moderateScale(12)}
            fontWeight="500"
            color="$textSecondary">
            Club Quilux
          </Text>
        </Box>
        <Text
          fontWeight="500"
          color="$textPrimary"
          fontSize={moderateScale(14)}>
          Johnnie Walker Black Label Air-Ink Limited Edition
        </Text>
        <Button
          variant="solid"
          action="primary"
          w={'80%'}
          h={verticalScale(28)}
          alignSelf="center"
          backgroundColor="$primary"
          borderRadius={'$md'}
          mt={'$1'}
          $active-bg="$orange200"
          onPress={() => navigation.navigate(SCREENS.drinks.singleDrink)}>
          <ButtonText color="$textTertiary" fontSize={moderateScale(11)}>
            Claim drink
          </ButtonText>
        </Button>
      </Box>
    </Box>
  );
};

export default DrinksCard;

const styles = StyleSheet.create({
  image: {
    height: verticalScale(100),
    width: '100%',
  },
});
