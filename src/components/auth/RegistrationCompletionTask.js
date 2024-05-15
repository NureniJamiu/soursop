import {StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import {Box, HStack, Text, VStack} from '@gluestack-ui/themed';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';

const RegistrationCompletionTask = ({icon, title, description}) => {
  return (
    <Box>
      <HStack gap="$4" alignItems="center">
        <Box
          bg="$textSecondary"
          justifyContent="center"
          alignItems="center"
          borderRadius="$lg"
          p={'$2'}>
          {icon}
        </Box>
        <VStack>
          <Text color="$textPrimary" fontWeight="$semibold">
            {title}
          </Text>
          <Text fontSize="$xs" fontWeight="$semibold">
            {description}
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default RegistrationCompletionTask;

const styles = StyleSheet.create({});
