import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const IconButton = ({ title = "Icon", onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <FontAwesome name="camera" size={20} color="black" style={styles.icon} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EDE7F6',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
  },
  icon: {
    marginRight: 5,
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default IconButton;