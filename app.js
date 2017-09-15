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
} from 'react-native';

export default class PlatziMusic extends Component {
  

  render() {
    return (
      <View style={styles.container}>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda la pantalla
    flexDirection: 'row',
    backgroundColor: 'red',
    flexWrap: 'wrap' //  Para lograr que los elementos caigan cuando sobre pasa el tamaño
  },
 
});

AppRegistry.registerComponent('PlatziMusic', () => PlatziMusic);
