import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {Avatar, Box, Divider, Text, VStack} from '@gluestack-ui/themed';
import {HStack} from '@gluestack-ui/themed';
import {AvatarImage} from '@gluestack-ui/themed';
import FlatButton from '../buttons/FlatButton';
import {Button, ButtonText} from '@gluestack-ui/themed';
// import {ButtonText} from '@gluestack-ui/config/build/theme';

const ClubReviews = () => {
  return (
    <Box my={25} px="$4">
      <HStack space="lg" alignItems="center" my="$2">
        <Avatar size="md">
          <AvatarImage
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF22pWQobEP7jY3xgI1GTL1LtZst_rKJWayw&usqp=CAU',
            }}
            alt="Avatar"
          />
        </Avatar>
        <VStack>
          <Text color="$coolGray200" fontWeight="$semibold" fontSize="$xl">
            Max Smith
          </Text>
          <Text color="$textGrey">12 Sept 2023</Text>
        </VStack>
      </HStack>
      <Text color="$coolGray200">
        Best place to enjoy nightlife in Lagos. Sound is perfect security is on
        point and there was no problem with finding a parking space. Got to see
        and had some premium drinks there, definitely can’t wait to be back
        here.
      </Text>
      <Box
        my="$3"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        <Text color="$textSecondary">Was this really helpful?</Text>
        <HStack space="md">
          <Button
            size="md"
            bg="$background"
            borderColor="$primary"
            borderWidth={1}
            action="primary">
            <ButtonText color="$primary">No</ButtonText>
          </Button>
          <Button size="md" bg="$primary" action="primary">
            <ButtonText color="$coolGray900">Yes</ButtonText>
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default ClubReviews;

const styles = StyleSheet.create({});
