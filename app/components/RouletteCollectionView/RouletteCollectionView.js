import React, {
  Component,
  PropTypes
} from 'react';

import {
  BackHandler,
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import {
  Navigator
} from 'react-native-deprecated-custom-components';

import ListView from '../ListView/ListView';


export default class RouletteCollectionView extends Component {
  
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
  }

  constructor() {
    super();
    this.state = {
      x: 0
    }

    this.onScroll = this.onScroll.bind(this);
    this.calcLeftMargin = this.calcLeftMargin.bind(this);
    this.handleBackPress = this.handleBackPress.bind(this);
  }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

  render() {
    this.state.pageID = this.props.pageID;
    return (
      <View style={{flex: 1}}>
        <FlatList
          horizontal={true}
          onScroll={this.onScroll}
          snapToInterval={100}
          style={{height: 140}}
          data={[
            {key: 'A'},
            {key: 'B'},
            {key: 'C'},
            {key: 'D'},
            {key: 'E'},
            {key: 'F'},
            {key: 'G'},
            {key: 'H'},
          ]}
          renderItem={({item, index}) => 
            <TouchableOpacity onPress={() => this.handleItemPress(item)}>
              <View
                style={[
                  styles.cell,
                  {marginLeft: (index == 0) ? this.calcLeftMargin() : 10,
                  marginRight: ((index == 7) ? Dimensions.get('window').width / 2 - 40 : 10),
                  marginTop: (0 + (40 - Math.abs((this.state.x / 100) - index) * 4) < 0) ? 0 : 0 + (40 - Math.abs((this.state.x / 100) - index) * 2),
                  width: (40 + (40 - Math.abs((this.state.x / 100) - index) * 20) < 40) ? 40 : 40 + (40 - Math.abs((this.state.x / 100) - index) * 20),
                  height: (40 + (40 - Math.abs((this.state.x / 100) - index) * 20) < 40) ? 40 : 40 + (40 - Math.abs((this.state.x / 100) - index) * 20)}]} >
                <Text style={styles.cellText}>{item.key}</Text>
              </View>
            </TouchableOpacity>
          } />
      </View>
      
    );
  }

  calcLeftMargin() {
    val = Dimensions.get('window').width / 2 - 40;
    for (i = 0; i < (this.state.x / 90); i++)
    {
      val += 80 - ((40 + (40 - Math.abs((this.state.x / 100) - i) * 20) < 40) ? 40 : 40 + (40 - Math.abs((this.state.x / 100) - i) * 20));
    }
    return val;
  }

  onScroll(event) {
    console.log(event.nativeEvent.contentOffset.x);
    this.setState({
      x:event.nativeEvent.contentOffset.x
    });
  }

  handleBackPress() {
    if (this.props.pageID != "Homepage") {
      this.props.navigator.pop();
      return true;
    }
    return false;
  }

  handleItemPress(item) {
    const nextRoute = {
      id: 'Subpage',
      component: ListView,
      title: this.props.title + " " + item.key
    };
    console.log(this.props.navigator);
    this.props.navigator.push(nextRoute);
  }
}


const styles = StyleSheet.create({
  cell: {
    width: 100,
    height: 100,
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  cellText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black'
  }
});


AppRegistry.registerComponent('RouletteCollectionView', () => RouletteCollectionView);