import React from 'react';
import {Box, Text} from '@gluestack-ui/themed';
import {DrinksIcon} from '../assets/svg/DrinksIcon';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CustomToast = ({message}) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <Box
        padding="$3"
        flexDirection="row"
        gap="$2"
        alignItems="center"
        bg="$textPrimary"
        borderRadius="$xl"
        shadowColor="$black">
        {/* <Image source={} alt="Product image" /> */}
        <DrinksIcon />
        <Text color="$textSecondary">{message}</Text>
        <Box w="$16" h="$16" bg="$tertiary" borderRadius="$full"></Box>
      </Box>
    </TouchableOpacity>
  );
};

export default CustomToast;

const styles = StyleSheet.create({});
