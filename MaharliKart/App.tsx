/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {CategoryProvider} from './app/providers/CategoryProvider';
import {NavigationContainer} from '@react-navigation/native';
import navigationTheme from './app/navigation/navigationTheme';
import {HistoryProvider} from './app/providers/HistoryProvider';
import AppNavigator from './app/navigation/AppNavigator';

export default function App() {
  return (
    <>
      <NavigationContainer theme={navigationTheme}>
        <CategoryProvider>
          <HistoryProvider>
            <AppNavigator />
          </HistoryProvider>
        </CategoryProvider>
      </NavigationContainer>
    </>
  );
}
