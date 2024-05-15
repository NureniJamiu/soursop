import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Box, HStack, Icon, Text} from '@gluestack-ui/themed';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {BackIcon} from '../../assets/svg/BackIcon';

const AuthHeader = ({title}) => {
  const navigation = useNavigation();
  return (
    <Box
      flexDirection="row"
      justifyContent="flex-start"
      alignItems="center"
      style={{marginTop: verticalScale(10)}}>
      <Box flex={1}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}>
          <HStack alignItems="center" space="sm" paddingHorizontal={'$5'}>
            <Icon
              as={BackIcon}
              name="left"
              color="#fffff"
              size={moderateScale(16)}
            />
          </HStack>
        </TouchableOpacity>
      </Box>
      <Box flex={2}>
        <Text
          textAlign="center"
          color="$textPrimary"
          fontWeight="bold"
          paddingHorizontal={'$5'}>
          {title}
        </Text>
      </Box>
      <Box flex={1}></Box>
    </Box>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({});
