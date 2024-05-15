import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Text} from '@gluestack-ui/themed';
import {useNavigation} from '@react-navigation/native';
import {ShareIcon} from '../../assets/svg/ShareIcon';
import {BookmarkIcon} from '../../assets/svg/BookmarkIcon';
import {Box} from '@gluestack-ui/themed';
import {BackIcon} from '../../assets/svg/BackIcon';
import {HStack} from '@gluestack-ui/themed';
import {SCREENS} from '../../navigation/screenNames';

const ProfileHeader = ({title="Account", color="#F7D098"}) => {
  const navigation = useNavigation();
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
        <TouchableOpacity onPress={() => navigation.goBack()} flex={1}>
          <Box mb={'$2'}>
            <BackIcon paddingBottom={'$2'} color={color}/>
          </Box>
        </TouchableOpacity>
        <Box style={styles.container}>
          <Text
            style={styles.centeredText}
            color={color}
            paddingBottom={'$2'}
            fontSize={'$xl'}>
            {title}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
  },
  centeredText: {
    textAlign: 'center', // Center the text horizontally within the View component
  },
});
