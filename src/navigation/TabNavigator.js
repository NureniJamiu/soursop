import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {verticalScale} from 'react-native-size-matters';
import {DrinksIcon} from '../assets/svg/DrinksIcon';
import {ExploreIcon} from '../assets/svg/ExploreIcon';
import {FeedsIcon} from '../assets/svg/FeedsIcon';
import {HomeIcon} from '../assets/svg/HomeIcon';
import {HomeActiveIcon} from '../assets/svg/HomeIconActive';
import {SavedIcon} from '../assets/svg/SavedIcon';
import {SCREENS} from './screenNames';
import HomeScreen from '../screens/home/HomeScreen';
import LocationsScreen from '../screens/home/location/LocationsScreen';
import FeedScreen from '../screens/home/feed/FeedScreen';
import DrinksScreen from '../screens/home/drinks/DrinksScreen';
import NotificationsScreen from '../screens/home/notification/NotificationsScreen';
import {Box, Text} from '@gluestack-ui/themed';

const Tab = createBottomTabNavigator();

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: verticalScale(78),
        alignItems: 'center',
        backgroundColor: '#ADD2B9',
        borderTopWidth: 0.5,
        borderTopColor: '#395D45',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const renderLabel = () => {
          if (route.name === SCREENS.home.homeScreen) {
            return 'Home';
          } else if (route.name === SCREENS.home.profile) {
            return 'Profile';
          } else if (route.name === SCREENS.home.history) {
            return 'History';
          } else if (route.name === SCREENS.home.askAI) {
            return 'AskAI';
          } else if (route.name === SCREENS.home.community) {
            return 'Community';
          }
        };

        const renderIcon = focused => {
          if (route.name === SCREENS.home.homeScreen) {
            if (focused) {
              return <HomeActiveIcon />;
            } else {
              return <HomeIcon />;
            }
          } else if (route.name === SCREENS.home.profile) {
            if (focused) {
              return <ExploreIcon color="#395D45" />;
            } else {
              return <ExploreIcon />;
            }
          } else if (route.name === SCREENS.home.history) {
            if (focused) {
              return <FeedsIcon color="#395D45" />;
            } else {
              return <FeedsIcon />;
            }
          } else if (route.name === SCREENS.home.askAI) {
            if (focused) {
              return <DrinksIcon color="#395D45" />;
            } else {
              return <DrinksIcon />;
            }
          } else if (route.name === SCREENS.home.community) {
            if (focused) {
              return <SavedIcon color="#395D45" />;
            } else {
              return <SavedIcon />;
            }
          }
        };

        return (
          <TouchableOpacity
            key={`${route}-${index}`}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Box mb={'$2'}>{renderIcon(isFocused)}</Box>
            <Text
              color={isFocused ? '$textSecondary' : '$textPrimary'}
              fontSize={'$xs'}>
              {renderLabel()}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name={SCREENS.home.homeScreen} component={HomeScreen} />
      <Tab.Screen name={SCREENS.home.profile} component={LocationsScreen} />
      <Tab.Screen name={SCREENS.home.history} component={DrinksScreen} />
      <Tab.Screen name={SCREENS.home.askAI} component={NotificationsScreen} />
      <Tab.Screen name={SCREENS.home.community} component={FeedScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
