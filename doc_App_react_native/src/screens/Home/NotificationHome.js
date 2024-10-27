// src/screens/NotificationHome.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotificationHome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Notifications</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default NotificationHome;