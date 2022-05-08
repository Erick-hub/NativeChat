import React from 'react';
import {StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SendButton = ({handleChat}) => {
  return (
    <Pressable onPress={handleChat} style={styles.button}>
      <Icon name="send" size={30} color="#030303" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    margin: 0,
    padding: 0,
    marginLeft: 16,
    marginRight: 0,
    borderRadius: 500,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeff',
  },
});

export default SendButton;
