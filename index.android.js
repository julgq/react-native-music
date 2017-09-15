/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';

export default class PlatziMusic extends Component {
  

  render() {
    return (
      <View style={styles.container}>
        <View styles={styles.box} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'black'
  }
});

AppRegistry.registerComponent('PlatziMusic', () => PlatziMusic);
