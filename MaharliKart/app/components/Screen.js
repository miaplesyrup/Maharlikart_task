import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

const Screen = ({children}) => {
  return <SafeAreaView style={[styles.screen]}>{children}</SafeAreaView>;
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'black',
    flex: 1,
    padding: 20,
    paddingTop: 30,
  },
});
