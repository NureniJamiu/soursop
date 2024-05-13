import TabNavigator from './TabNavigator';
import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from './screenNames';
import HomeScreen from '../screens/home/HomeScreen';
import LocationsScreen from '../screens/home/location/LocationsScreen';
import DrinksCard from '../components/cards/DrinksCard';
import NotificationsScreen from '../screens/home/notification/NotificationsScreen';
import FeedScreen from '../screens/home/feed/FeedScreen';

const Stack = createNativeStackNavigator();
const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SCREENS.navigators.tabs} component={TabNavigator} />
      <Stack.Screen name={SCREENS.home.profile} component={LocationsScreen} />
      <Stack.Screen name={SCREENS.home.history} component={DrinksCard} />
      <Stack.Screen name={SCREENS.home.askAI} component={NotificationsScreen} />
      <Stack.Screen name={SCREENS.home.community} component={FeedScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;

const styles = StyleSheet.create({});
