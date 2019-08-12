import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import ActivityScreen from "../screens/ActivityScreen"
import TabBarIcon from '../components/TabBarIcon';

const ActivityStack = createStackNavigator(
  {
    Activity: ActivityScreen,
  },
);

ActivityStack.navigationOptions = {
  tabBarLabel: 'Activity',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

export default ActivityStack;