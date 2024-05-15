import {ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {Box, Pressable, Text} from '@gluestack-ui/themed';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';

const EventCard = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={{
        uri: 'https://imgcp.aacdn.jp/img-a/1720/auto/global-aaj-front/article/2017/05/59240064682c4_5924001331ee1_801124285.jpg',
      }}>
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.08)', 'rgba(0, 0, 0, 0.80)']}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
      <Box flexDirection="row" justifyContent="flex-end">
        <Box
          px={'$2'}
          py={'$1'}
          bg="$primary"
          flexDirection="row"
          borderRadius={moderateScale(8)}
          w={scale(57)}
          h={verticalScale(24)}>
          <Text color="$textTertiary">Hot</Text>
          <Text> 🔥</Text>
        </Box>
      </Box>
      <Box mt="$32">
        <Text
          fontWeight="500"
          fontSize={moderateScale(20)}
          color="$textPrimary">
          Sweat it out with DJ Vibes
        </Text>
        <Text fontWeight="500" fontSize={moderateScale(16)} color="$textGrey">
          Live at Eko Atlantic. 12th Dec 2023.
        </Text>
      </Box>
    </ImageBackground>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  background: {
    height: verticalScale(210),
    width: scale(284),
    marginHorizontal: scale(8),
    borderRadius: moderateScale(8),
    overflow: 'hidden',
    padding: moderateScale(16),
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});
