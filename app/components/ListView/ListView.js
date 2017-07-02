import React, {
  Component
} from 'react';

import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  Platform
} from 'react-native';

import RouletteCollectionView from '../RouletteCollectionView/RouletteCollectionView';


export default class ListView extends Component {
  render() {
    return (
      <View style={styles.container} title="Test">
        <ToolbarAndroid
          style={styles.toolbar}
          logo={require('../../images/app_logo.png')}
          title={this.props.title} />  
        <FlatList
        data={[
          {key: 'Item 1'},
          {key: 'Item 2'},
          {key: 'Item 3'},
          {key: 'Item 4'},
          {key: 'Item 5'},
          {key: 'Item 6'},
          {key: 'Item 7'},
          {key: 'Item 8'},
        ]}
        renderItem={({item}) =>
          <View>
            <View style={styles.titleView}>
              <Text style={styles.title}>{item.key}</Text>
            </View>
            <RouletteCollectionView pageID={this.props.pageID} navigator={this.props.navigator} title={item.key} />
          </View>
        } />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    margin: 0
  },
  titleView: {
    height: 50,
    justifyContent: 'center',
    backgroundColor: 'powderblue'
  },
  title: {
    height: 30,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 20
  },
  toolbar: {
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        height: 0
      },
      android: {
        height: 56
      }
    })
  }
});


AppRegistry.registerComponent('ListView', () => ListView);