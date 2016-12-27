import React, {Component} from 'react';
import {ScrollView, Text, Container} from 'react-native';
import CharacterItem from '../../components/CharacterItem';
import {connect} from 'react-redux';

class HouseList extends Component {
    renderCharacterList() {
        return this.props.houses.map((character) => {
            return (
                <CharacterItem key={character.name} character={character} />
            )
        })
    }

    render() {
        return(
            <ScrollView>
                {this.renderCharacterList()}
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return {
        houses: state.houses.list
    }
}

export default connect(mapStateToProps)(HouseList);