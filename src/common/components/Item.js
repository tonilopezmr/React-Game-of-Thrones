import React, {Component, PropTypes} from 'react';
import {Image, Alert} from 'react-native';
import {Text, View} from 'native-base';
import {connect} from 'react-redux';

import styles from './styles';

class Item extends Component {
  static propTypes = {
    character: PropTypes.object
  }

  static contextTypes = {
    routes: PropTypes.object.isRequired
  };

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

const mapStateToProps = (state) => ({
  characters: state.characters
})

export default connect(mapStateToProps)(Item);