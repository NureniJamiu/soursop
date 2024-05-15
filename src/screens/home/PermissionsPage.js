import React, {useEffect, useState} from 'react';
import {Box, Text} from '@gluestack-ui/themed';
import {useNavigation} from '@react-navigation/native';
import FlatButton from '../../components/buttons/FlatButton';
import {StyleSheet} from 'react-native';

import {
  Camera,
  useCameraDevices,
  useCameraPermission,
} from 'react-native-vision-camera';

const PermissionsPage = () => {
  const navigation = useNavigation();
  const {hasPermission, requestPermission} = useCameraPermission();

  useEffect(() => {
    requestPermission();
  }, []);

  if (!hasPermission) {
    console.log('No permission granted');
    return;
  }
  if (device == null) {
    console.log('Device needs permission access');
    return;
  }

  return (
    <Box bg="$background" $lg-opacity="$100" flex={1}>
      <Text>Permission to access camera required</Text>

      <FlatButton
        title="Request Permission"
        onPress={() => console.log('Permission requested!')}
      />
    </Box>
  );
};

export default PermissionsPage;

const styles = StyleSheet.create({});
