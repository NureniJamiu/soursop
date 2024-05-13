import {StyleSheet} from 'react-native';
import React from 'react';
import SafePageContainer from '../../components/containers/SafePageContainer';
import AuthHeader from '../../components/headers/AuthHeader';
import {Box, Button, ButtonText, Text} from '@gluestack-ui/themed';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SCREENS} from '../../navigation/screenNames';

const CheckInboxScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {email = ''} = route.params;
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
          Check your inbox
        </Text>
        <Text
          mx={'$16'}
          mt={'$2'}
          color="$textSecondary"
          fontSize={moderateScale(16)}
          textAlign="center"
          fontWeight="$semibold"
          lineHeight={'$md'}>
          We’ve sent a code to {email}
        </Text>
      </Box>
      <Box px={'$10'} mt={verticalScale(100)}>
        <Button
          variant="solid"
          action="primary"
          w={'$full'}
          h={verticalScale(50)}
          alignSelf="center"
          backgroundColor="$primary"
          borderRadius={'$md'}
          marginVertical={'$3'}
          $active-bg="$orange200">
          <ButtonText color="$textTertiary">Open email app</ButtonText>
        </Button>
        <Button
          variant="outline"
          action="primary"
          w={'$full'}
          h={verticalScale(50)}
          alignSelf="center"
          borderColor="$primary"
          borderRadius={'$md'}
          marginVertical={'$3'}
          $active-h={verticalScale(49.5)}
          onPress={() => {
            navigation.navigate(SCREENS.auth.confirmOTP, {
              reset: true,
            });
          }}>
          <ButtonText color="$textSecondary">Enter code manually</ButtonText>
        </Button>
      </Box>
    </SafePageContainer>
  );
};

export default CheckInboxScreen;

const styles = StyleSheet.create({});
