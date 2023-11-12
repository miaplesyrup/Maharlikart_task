import {StyleSheet, Text} from 'react-native';
import React from 'react';

const AppText = ({children, style}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: 'Avenir',
  },
});
