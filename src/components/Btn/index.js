import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { width } from '../../config';

const Btn = ({ title, backgroundColor, color, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <View style={[styles.btn, { backgroundColor }]}>
        <Text style={[styles.text, { color }]}>{title}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width
  },
  btn: {
    alignItems: 'center',
    minWidth: 100,
    padding: 15,
    borderRadius: 3
  }, 
  text: {
    fontSize: 20, 
    fontWeight: '600'
  },
});

export default Btn;
