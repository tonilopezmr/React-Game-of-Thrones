import React, {Component, PropTypes} from 'react';
import {Image, Alert} from 'react-native';
import {Text, View} from 'native-base';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {selectCharacter} from '../actions';

import styles from './styles';

class CharacterItem extends Component {
  static propTypes = {
    character: PropTypes.object
  }

  static contextTypes = {
    routes: PropTypes.object.isRequired
  };

  render() {
    const {
      character
    } = this.props;

    return (
      <View>
        <Image style={styles.image} source={{uri: character.imageUrl}}>
          <Text style={styles.text}>{character.name}</Text>
        </Image>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  characters: state.characters
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    selectCharacter: selectCharacter
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(CharacterItem);