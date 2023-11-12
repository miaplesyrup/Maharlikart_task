import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import History from '../screens/HistoryScreen';
import SearchItem from '../screens/SearchItem';

const Stack = createNativeStackNavigator();
const ProductsNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false, presentation: 'card'}}>
    <Stack.Screen name="HistoryList" component={History} />
    <Stack.Screen name="SearchItem" component={SearchItem} />
  </Stack.Navigator>
);

export default ProductsNavigator;
