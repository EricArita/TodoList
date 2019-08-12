import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import CompleteScreen from "../screens/CompleteScreen";

const CompleteStack = createStackNavigator(
    {
        Complete: CompleteScreen,
    },
);

CompleteStack.navigationOptions = {
    tabBarLabel: 'Complete',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
    ),
};

export default CompleteStack;