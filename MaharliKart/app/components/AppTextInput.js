import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

const AppTextInput = ({...otherProps}) => {
  return (
    <View style={styles.container}>
      <TextInput {...otherProps} />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    backgroundColor: 'grey',
    flexDirection: 'row',
    width: '100%',
    padding: 8,
    marginVertical: 10,
    alignItems: 'center',
  },
  textInput: {
    fontSize: 18,
    fontFamily: 'Avenir',
  },
  icon: {
    marginRight: 5,
    marginLeft: 5,
  },
});
