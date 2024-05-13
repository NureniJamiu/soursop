import {StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Box, Text} from '@gluestack-ui/themed';
import {useNavigation} from '@react-navigation/native';
import FlatButton from '../../components/buttons/FlatButton';

import {
    Camera,
    useCameraDevices,
    useCameraPermission,
  } from 'react-native-vision-camera';

const PermissionsPage = () => {
  const navigation = useNavigation();
  const {requestPermission} = useCameraPermission();

 

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
