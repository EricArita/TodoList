import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import TodoScreen from "../screens/TodoScreen"
import TabBarIcon from '../components/TabBarIcon';
import TodoDetailScreen from '../screens/TodoDetailScreen';
import ActivityScreen from '../screens/ActivityScreen';

const TodoStack = createStackNavigator(
  {
    Todo: TodoScreen,
    TodoDetail: TodoDetailScreen,
    Activity: ActivityScreen
  },
);

TodoStack.navigationOptions = {
  tabBarLabel: 'Todo',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

export default TodoStack