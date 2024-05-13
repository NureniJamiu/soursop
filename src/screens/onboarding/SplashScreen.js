import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import {Box, Image, StatusBar, Text} from '@gluestack-ui/themed';
import {scale, verticalScale} from 'react-native-size-matters';

const LogoIcon = require('../../assets/images/soursop_logo.png');

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Box style={styles.background} width="$full">
        <Image source={LogoIcon} alt="Soursop Logo" w="$32" h="$32" />
        <Box position="absolute" bottom={verticalScale(64)}>
          <ActivityIndicator size={'large'} color={'#F7D098'} />
        </Box>
      </Box>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#395d45',
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: scale(16),
  },
});
