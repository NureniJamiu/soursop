import {StyleSheet} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  Input,
  Text,
} from '@gluestack-ui/themed';

import CustomBottomSheet from '../../components/modals/CustomBottomSheet';

import {useNavigation} from '@react-navigation/native';
import {useToast} from 'react-native-toast-notifications';

// react native vision camera
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import CustomInput from '../../components/inputs/CustomInput';

const HomeScreen = () => {
  const toast = useToast();
  const navigation = useNavigation();

  const [photoUri, setPhotoUri] = useState(null);
  const [openBottomSheet, setOpenBottomSheet] = useState(false);

  const camera = useRef(null);
  const device = useCameraDevice('back');
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

  const takePhoto = async () => {
    const file = await camera.current.takePhoto();
    // toast.show('Photo Captured', {
    //   data: {title: 'Toast title'},
    //   offset: 100,
    // });

    setPhotoUri(`file://${file.path}`);
  };

  return (
    <Box
      bg="$background"
      position="relative"
      $lg-opacity="$100"
      flex={1}
      w="$full"
      justifyContent="flex-end">
      {!photoUri ? (
        <>
          <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            ref={camera}
            photo={true}
          />
          <Box style={styles.overlayContainer}>
            <Box style={styles.overlayTop} />
            <Box style={styles.overlayMiddle}>
              <Box style={styles.overlaySide} />
              <Box style={styles.clearCenter} />
              <Box style={styles.overlaySide} />
            </Box>
            <Box style={styles.overlayBottom} />
          </Box>
        </>
      ) : (
        <Box flex={1} justifyContent="center" alignItems="center">
          <Image
            source={{uri: photoUri}}
            alt="New picture"
            w="$72"
            h="$72"
            borderRadius="$2xl"
          />
        </Box>
      )}
      <CustomInput borderRadius="$3xl" mx="$8" placeholder="Search" />
      <Center mt="$4">
        <Button
          mb="$5"
          w="$16"
          h="$16"
          bg="$textDark400"
          borderRadius="$full"
          onPress={takePhoto}></Button>
      </Center>

      <CustomBottomSheet
        openModal={openBottomSheet}
        closeModal={() => setOpenBottomSheet(false)}
        modalSnapPoints={['58%']}
        enablePanDownToClose={true}>
        <Box w={'$full'}>
          <Box position="absolute" right={0} left={0} top={0}>
            <Text textAlign="center" mb="$4">
              Filter
            </Text>
            <HStack flexDirection="row" flexWrap="wrap" gap="$2"></HStack>
          </Box>
        </Box>
      </CustomBottomSheet>
    </Box>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  overlayContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '28.88%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  overlayMiddle: {
    flexDirection: 'row',
  },
  overlaySide: {
    width: '15%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  clearCenter: {
    width: '80%',
    aspectRatio: 1,
    backgroundColor: 'transparent',
    // borderRadius: 70,
  },
  overlayBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '28.88%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
});
