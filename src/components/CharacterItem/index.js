import React, {Component, PropTypes} from 'react';
import {Image, Alert} from 'react-native';
import {Text, View} from 'native-base';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {selectCharacter} from '../../actions/character.actions';

import styles from './styles';

class CharacterCard extends Component {
    static propTypes = {
        character: PropTypes.object
    }

    static contextTypes = {
        routes: PropTypes.object.isRequired
    };

    // handlePress = (character) => {
    //     this.context.routes.details({data: character, title: "Details"})
    // }
    //onPress={() => this.handlePress(character)}

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

function mapStateToProps(state) {
    return {
        characters: state.characters
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectCharacter: selectCharacter
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCard);