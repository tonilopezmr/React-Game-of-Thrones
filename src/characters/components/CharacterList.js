import React, {Component} from 'react';
import {ScrollView, Text, Container} from 'react-native';
import CharacterItem from './CharacerItem';
import {connect} from 'react-redux';

class CharacterList extends Component {
  renderCharacterList() {
    return this.props.characters.map((character) => {
      return (
        <CharacterItem key={character.name} character={character}/>
      )
    })
  }

  render() {
    return (
      <ScrollView>
        {!this.props.characters.length == 0 ?
          this.renderCharacterList() :
          <Spinner />
        }
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => ({
  characters: state.characters.list
})

export default connect(mapStateToProps)(CharacterList);