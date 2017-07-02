/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';

import {
  NavigatorIOS,
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Navigator
} from 'react-native-deprecated-custom-components';

import ListView from './app/components/ListView/ListView';


export default class ReactPractice extends Component {

  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: ListView,
          title: 'React Testing'
        }}
        style={{flex: 1}} />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    margin: 10
  }
});


AppRegistry.registerComponent('ReactPractice', () => ReactPractice);
