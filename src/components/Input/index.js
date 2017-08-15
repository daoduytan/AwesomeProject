import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import { COLOR } from '../../config';

const Input = ({ label, value, placeholder, style, secureTextEntry, onChangeText }) => (
  <View style={styles.container}>
    {label && <View style={styles.label}><Text style={styles.textLabel}>{label}</Text></View>}
    <TextInput
      secureTextEntry={secureTextEntry}
      value={value}
      placeholder={placeholder}
      style={[style, styles.input]}
      onChangeText={onChangeText}
      underlineColorAndroid="transparent"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderColor: COLOR.light,
    borderBottomWidth: 1,
    marginBottom: 30
  },
  label: {
    marginBottom: 15,
    
  },
  textLabel: {
    fontWeight: '600',
    color: COLOR.dask
  },
  input: {
    height: 50
  }
});

export default Input;
