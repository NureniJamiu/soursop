import {ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {Box, Button, ButtonText, Text, VStack} from '@gluestack-ui/themed';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../navigation/screenNames';
import { Image } from '@gluestack-ui/themed';
import { HStack } from '@gluestack-ui/themed';
import { Icon } from '@gluestack-ui/themed';
import { BookmarkIcon } from '../../assets/svg/BookmarkIcon';
import { ChevronRightIcon, Circle, MapPinIcon } from 'lucide-react-native';
import { TouchableOpacity } from '@gorhom/bottom-sheet';

const SpotCard = ({title, imageUrl, imageDescription}) => {
  const navigation = useNavigation();

  return (
    <Box>
      <Box mt="$10">
        <Text fontWeight="$bold" color="$textPrimary">
          {title}
        </Text>
        <Image
          my="$4"
          source={{
            uri: `${imageUrl}`,
          }}
          h={verticalScale(200)}
          w="$full"
          alt="Blog image"
        />
      </Box>
      <Text color="$textSecondary" textAlign="center" fontSize="$sm">
        {imageDescription}
      </Text>
      <Text color="$textPrimary" my="$4">
        Start your evening at Freedom Park, a historical site turned cultural
        center. It's an ideal place for a leisurely walk, live music
        performances, and open-air events. You can also enjoy local food from
        nearby street vendors.
      </Text>
      <Box>
        <HStack
          bg="$inputBackground"
          borderRadius="$xl"
          p="$2"
          gap="$3"
          w="$full">
          <Image
            source={{
              uri: `${imageUrl}`,
            }}
            borderRadius="$xl"
            alt="Blog image"
          />
          <VStack flex={1} justifyContent="space-around">
            <HStack
              justifyContent="space-between"
              alignItems="center"
              w="$full">
              <Text fontWeight="$bold" color="$textPrimary">
                {title}
              </Text>
              <Icon as={BookmarkIcon} color="$textSecondary" />
            </HStack>
            <HStack justifyContent="space-between" alignItems="baseline">
              <VStack>
                <Text color="$textLight400" fontSize="$sm">
                  Outdoor | 10:00am - 4:00pm
                </Text>
                <HStack gap="$0.5">
                  <Icon as={Circle} color="$textSecondary" size={14} />
                  <Icon as={Circle} color="$textSecondary" size={14} />
                  <Icon as={Circle} color="$textSecondary" size={14} />
                  <Icon as={Circle} color="$textSecondary" size={14} />
                  <Icon as={Circle} color="$textSecondary" size={14} />
                </HStack>
              </VStack>
              <TouchableOpacity onPress={() => {}}>
                <HStack
                  gap="$0.5"
                  borderColor="$primary"
                  borderWidth={1}
                  p="$1"
                  borderRadius="$xl">
                  <Icon as={MapPinIcon} color="$textSecondary" size={14} />
                  <Icon
                    as={ChevronRightIcon}
                    color="$textSecondary"
                    size={14}
                  />
                </HStack>
              </TouchableOpacity>
            </HStack>
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default SpotCard;

const styles = StyleSheet.create({});