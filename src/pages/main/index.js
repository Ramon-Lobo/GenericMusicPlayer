import React from 'react';

import { View, StatusBar } from 'react-native';
import styles from './styles';

const Main = () => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content"/>
  </View>
);

Main.navigationOptions = {
  title: 'Your Library',
};

export default Main;
