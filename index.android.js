/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';

import {
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

  renderScene(route, navigator) {
    switch(route.id)
    {
      case 'Homepage':
        return (<ListView pageID={route.id} navigator={navigator} title="React Testing" />)
      case 'Subpage':
        return (<ListView pageID={route.id} navigator={navigator} title={route.title} />)
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{id: 'Homepage'}}
        renderScene={this.renderScene}
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromRight} />
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