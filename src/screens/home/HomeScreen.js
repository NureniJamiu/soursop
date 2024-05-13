import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Box, Text} from '@gluestack-ui/themed';

import {SCREENS} from '../../navigation/screenNames';
import {useNavigation} from '@react-navigation/native';

// react native vision camera
import {
  Camera,
  useCameraDevices,
  useCameraPermission,
} from 'react-native-vision-camera';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {hasPermission, requestPermission} = useCameraPermission();

  useEffect(() => {
    requestPermission();
  }, []);

  if (!hasPermission) return <PermissionsPage />
  if (device == null) return <NoCameraDeviceError />

  return (
    <Box bg="$background" $lg-opacity="$100" flex={1}>
      <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
    />
    </Box>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
