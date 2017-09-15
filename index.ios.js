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
        <View style={[styles.box, styles.red ]} />
        <View style={[styles.box, styles.green ]} />
        <View style={[styles.box, styles.blue ]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda la pantalla
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'black'
  },
  red: {
    alignSelf: 'flex-end',
    backgroundColor: 'red'
  },
  green: {
    backgroundColor: 'green'
  },
  blue: {
    backgroundColor: 'blue',
    alignSelf: 'flex-start'
  }
});

AppRegistry.registerComponent('PlatziMusic', () => PlatziMusic);
