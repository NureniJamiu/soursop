import {ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import SafePageContainer from '../../components/containers/SafePageContainer';
import {Box, Text} from '@gluestack-ui/themed';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../lib/screenUtils';
import {CongratulationsIcon} from '../../assets/svg/CongratulationsIcon';
import FlatButton from '../../components/buttons/FlatButton';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../navigation/screenNames';
import RegistrationCompletionTask from '../../components/auth/RegistrationCompletionTask';
import {BusinessIcon} from '../../assets/svg/BusinessIcon';
import {DrinkIcon} from '../../assets/svg/DrinkIcon';
import {SetupIcon} from '../../assets/svg/SetupIcon';

const businessIcon = <BusinessIcon />;
const drinkIcon = <DrinkIcon />;
const setupIcon = <SetupIcon />;

const CongratulationsScreen = () => {
  const navigation = useNavigation();

  return (
    <Box
      bg="$textTertiary"
      flex={1}
      px={'$6'}
      alignItems="center"
      justifyContent="center">
      <Box
        bg="$background"
        alignItems="center"
        justifyContent="center"
        w={'$full'}
        py={'$5'}
        px={'$4'}
        borderRadius={'$5xl'}>
        <CongratulationsIcon />
        <Box mt={'$2'}>
          <Text
            my={'$5'}
            fontWeight="$bold"
            color="$textSecondary"
            fontSize={'$3xl'}
            lineHeight={'$2xl'}
            textAlign="center">
            Sign up complete
          </Text>
          <Text
            textAlign="center"
            color="$textPrimary"
            fontSize={'$md'}
            mb={'$10'}>
            Welcome, complete the registration process and get your business
            running
          </Text>
        </Box>

        <Box w="$full" gap="$3" alignItems="flex-start" my="$5">
          <RegistrationCompletionTask
            icon={businessIcon}
            title="Update business information"
            description="Add more information about your business"
          />
          <RegistrationCompletionTask
            icon={setupIcon}
            title="Setup business operations"
            description="Set operations hours and preparations time"
          />
          <RegistrationCompletionTask
            icon={drinkIcon}
            title="Manage drinks catalogue"
            description="Add items to your catalogue easily"
          />
        </Box>

        <Box mt="$16" w="$full">
          <FlatButton
            title="Setup business"
            onPress={() =>
              navigation.navigate(SCREENS.navigators.home, {
                screen: SCREENS.home.favoriteCategory,
              })
            }
          />

          <FlatButton
            variant="link"
            title="Skip for later"
            bgColor="$background"
            borderColor="$background"
            color="$textPrimary"
            onPress={() => navigation.navigate(SCREENS.auth.login)}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CongratulationsScreen;

const styles = StyleSheet.create({
  imageBackground: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
});
