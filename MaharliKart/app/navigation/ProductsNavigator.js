import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ParentCategory from '../screens/MainScreen';
import SubCategory from '../screens/SubCategory';
import SearchItem from '../screens/SearchItem';

const Stack = createNativeStackNavigator();
const ProductsNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false, presentation: 'card'}}>
    <Stack.Screen name="ParentCategory" component={ParentCategory} />
    <Stack.Screen name="SearchItem" component={SearchItem} />
    <Stack.Screen name="SubCategory" component={SubCategory} />
  </Stack.Navigator>
);

export default ProductsNavigator;
