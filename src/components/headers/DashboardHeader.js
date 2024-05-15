import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Box} from '@gluestack-ui/themed';
import {HeaderLogo} from '../../assets/svg/HeaderLogo';
import {verticalScale} from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import ProfileAvatar from '../image/ProfileAvatar';

const DashboardHeader = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    // Navigate to the profile page when the avatar is pressed
    navigation.navigate('Profile Screen');
  };

  return (
    <Box h={'$20'} bg="$secondary">
      <Box
        position="absolute"
        bottom={'$2'}
        px={'$4'}
        flexDirection="row"
        justifyContent="space-between"
        w={'100%'}
        alignItems="center">
        <HeaderLogo h={verticalScale(38)} w={124} />
        <ProfileAvatar onPress={() => navigation.navigate('Profile Screen')} />
      </Box>
    </Box>
  );
};

export default DashboardHeader;

const styles = StyleSheet.create({});
