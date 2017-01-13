import React, {Component, PropTypes} from 'react';
import {Image, Alert} from 'react-native';
import {Text, View} from 'native-base';
import {connect} from 'react-redux';

import styles from './styles';

class Item extends Component {

  render() {
    const {
      item
    } = this.props;

    return (
      <View>
        <Image style={styles.image} source={{uri: item.imageUrl}}>
          <Text style={styles.text}>{item.name}</Text>
        </Image>
      </View>
    )
  }
}

export default connect()(Item);