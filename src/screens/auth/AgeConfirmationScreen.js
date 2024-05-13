import {StyleSheet} from 'react-native';
import React from 'react';
import SafePageContainer from '../../components/containers/SafePageContainer';
import {Text} from '@gluestack-ui/themed';
import {Box} from '@gluestack-ui/themed';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import FlatButton from '../../components/buttons/FlatButton';
import AuthHeader from '../../components/headers/AuthHeader';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../navigation/screenNames';

const AgeConfirmationScreen = ({route}) => {
  const {age} = route?.params;
  const navigation = useNavigation();

  return (
    <SafePageContainer>
      <AuthHeader />
      <Box marginVertical={'$8'}>
        <Text
          color="$textSecondary"
          fontSize={moderateScale(32)}
          textAlign="center"
          fontWeight="$semibold"
          lineHeight={'$2xl'}>
          Confirmation
        </Text>
      </Box>
      <Box
        marginVertical={verticalScale(36)}
        marginHorizontal={scale(16)}
        alignItems="center"
        justifyContent="center"
        borderColor="$primary"
        borderWidth={1}
        borderRadius={'$lg'}
        paddingVertical={'$2'}>
        <Text
          color="$textSecondary"
          fontSize={moderateScale(32)}
          lineHeight={'$2xl'}
          marginTop={'$2'}
          fontWeight="$semibold">
          {age} years old
        </Text>
        <Text
          color="$textSecondary"
          fontSize={moderateScale(14)}
          marginVertical={'$2'}>
          (February 18, 1995)
        </Text>
      </Box>
      <Text
        color="$textSecondary"
        fontSize={moderateScale(17)}
        textAlign="center"
        lineHeight={'$xl'}
        marginHorizontal={scale(50)}
        marginVertical={'$2'}>
        As part of our commitment to responsible drinking, please confirm your
        age displayed above is correct and you are of legal drinking age.
      </Text>
      <Box paddingHorizontal={scale(44)} mt={'$32'}>
        <FlatButton
          title="Yes I confirm"
          onPress={() =>
            navigation.navigate(SCREENS.auth.confirmOTP, {reset: false})
          }
        />
      </Box>
    </SafePageContainer>
  );
};

export default AgeConfirmationScreen;

const styles = StyleSheet.create({});
