import React, {Component, PropTypes} from 'react';
import {Image, TouchableHighlight} from 'react-native';
import {Text} from 'native-base';
import {connect} from 'react-redux';

import styles from './styles';

class Item extends Component {

  render() {
    const {
      item,
      onItemClick
    } = this.props;

    return (
      <TouchableHighlight onPress={() => onItemClick(item)}>
        <Image style={styles.image} source={{uri: item.imageUrl}}>
          <Text style={styles.text}>{item.name}</Text>
        </Image>
      </TouchableHighlight>
    )
  }
}

export default connect()(Item);