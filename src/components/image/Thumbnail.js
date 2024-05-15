import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';
import Modal from 'react-native-modal';

const Thumbnail = ({imageUrls, size = 100}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0); // Reset current image index when imageUrls changes
  }, [imageUrls]);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const showNextImage = () => {
    if (currentImageIndex < imageUrls.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      closeModal()
      setTimeout(() => { 

        
        setCurrentImageIndex(0);
      },600)
      
    }
  };

  return (
    <View style={[styles.container, {width: size + 2, height: size + 2}]}>
      <TouchableOpacity onPress={openModal}>
        <View style={[styles.circularImage, {width: size, height: size}]}>
          <FastImage
            source={{uri: imageUrls[currentImageIndex]}}
            style={[styles.circularImage, {width: size, height: size}]}
          />
          <View style={styles.goldRing} />
        </View>
      </TouchableOpacity>

      <Modal
        isVisible={modalVisible}
        animationIn="fadeIn"
        animationOut="fadeOut"
        animationOutTiming={200}
        onBackdropPress={closeModal}
        onSwipeComplete={showNextImage}
        swipeDirection={['left', 'right']}
        style={styles.modal}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={showNextImage}
          style={styles.fullScreenContainer}>
          <FastImage
            source={{uri: imageUrls[currentImageIndex]}}
            style={styles.fullImage}
            resizeMode={FastImage.resizeMode.contain}
          />
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: Dimensions.get('window').width, // To make it a circle
    borderColor: 'gold',
    overflow: 'hidden',
  },
  circularImage: {
    // ...StyleSheet.absoluteFillObject,
    borderRadius: Dimensions.get('window').width,
    paddingRight: '6px'// To make it a circle
  },
  goldRing: {
    ...StyleSheet.absoluteFillObject,
    borderWidth: 1,
    borderColor: 'gold',
    borderRadius: Dimensions.get('window').width, // To make it a circle
  },
  modal: {
    margin: 0,
  },
  fullScreenContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default Thumbnail;
