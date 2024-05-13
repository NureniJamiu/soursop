/* eslint-disable prettier/prettier */
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import SafePageContainer from '../../components/containers/SafePageContainer';
import {
  Box,
  Text,
  HStack,
  Divider,
  StatusBar,
  Image,
} from '@gluestack-ui/themed';
import ProgressBar from '../../components/progress/ProgressBar';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {HeaderLogo} from '../../assets/svg/HeaderLogo';
import {ImageSlider} from 'react-native-image-slider-banner';
import SocialButton from '../../components/buttons/SocialButton';
import {appleIcon, googleIcon} from '../../assets/svg/socialIcons';
import FlatButton from '../../components/buttons/FlatButton';
import {SCREENS} from '../../navigation/screenNames';
import {useNavigation} from '@react-navigation/native';
import {LogoIcon} from '../../assets/svg/LogoIcon';

const image = require('../../assets/images/splash.png');
const logo = require('../../assets/images/soursop_logo.png');

const OnboardingScreen = () => {
  const navigation = useNavigation();

  return (
    <Box flex={1}>
      <Box w="$full">
        <Box h="$80" w="$full" bg="$primary">
          <Image source={image} alt="Onboard Image" style={styles.img} />
        </Box>

        <Box h="$full" position="relative" bg="$background">
          <Box position="absolute" top="-$20" left="$1/3">
            <Image source={logo} alt="Soursop Logo" w="$32" h="$32" />
          </Box>

          <Box mt="$24" mx="$6">
            <Text textAlign="center" fontWeight="$bold" px="$12" fontSize="$lg">
              Say goodbye to uncertainty and hello to transparency with SourSop
            </Text>

            <Box my="$8" px="$8">
              <FlatButton
                title="Start scanning"
                fontWeight="$semibold"
                onPress={() => navigation.navigate(SCREENS.navigators.home)}
              />
              <FlatButton
                title="Sign up"
                fontWeight="$bold"
                variant="link"
                color="$textSecondary"
                bgColor="$background"
                borderColor="$background"
                onPress={() =>
                  navigation.navigate(SCREENS.navigators.auth, {
                    screen: SCREENS.auth.signUp,
                  })
                }
              />
            </Box>
            <Box>
              <Text color="$tertiary" textAlign="center">
                Already have an account? <Text>Sign in</Text>
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  imgContainer: {
    height: '100%',
  },
  img: {
    width: '100%',
    height: '100%',
  },
});
