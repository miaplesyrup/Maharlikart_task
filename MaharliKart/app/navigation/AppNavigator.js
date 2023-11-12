import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProductsNavigator from './ProductsNavigator';
import HistoryNavigator from './HistoryNavigator';

const Tab = createBottomTabNavigator();
const AppNavigator = () => (
  <Tab.Navigator screenOptions={{headerShown: false}}>
    <Tab.Screen name="Products" component={ProductsNavigator} />
    <Tab.Screen name="History" component={HistoryNavigator} />
  </Tab.Navigator>
);

export default AppNavigator;
