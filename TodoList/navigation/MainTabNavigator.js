import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TodoStack from "./TodoStack";
import ActivityStack from './ActivityStack';
import CompleteStack from './CompleteStack';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

TodoStack.path = '';
ActivityStack.path = '';
CompleteStack.path = '';

const tabNavigator = createBottomTabNavigator({
  TodoStack,
  ActivityStack,
  CompleteStack,
});

tabNavigator.path = '';

export default tabNavigator;
