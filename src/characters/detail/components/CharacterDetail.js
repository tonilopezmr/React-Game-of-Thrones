import React, {Component} from 'react'
import styles from './styles'

import {
  View,
  Image,
  Text,
  ScrollView,
  Platform
} from 'react-native'

import {
  Container,
  Title,
  Header,
  Button,
  Icon
} from 'native-base'

import {Actions} from 'react-native-router-flux'
import theme from '../../../themes/theme'

const platform = (Platform.OS === 'ios') ? 'ios' : 'md'

class CharacterDetail extends Component {

  render() {
    const {
      character
    } = this.props

    return (
      <Container theme={theme}>
        <Header>
          <Button transparent onPress={() => Actions.pop()}>
            <Icon name={platform+'-arrow-back'} />
          </Button>
          <Title>{character.name}</Title>
        </Header>
        <View style={{flex: 1}}>
          <Image style={styles.image} source={{uri: character.imageUrl}}>
          </Image>
          <ScrollView style={styles.character}>
            <Text style={styles.name}>
              {character.name}
            </Text>
            <Text style={styles.description}>
              {character.description}
            </Text>
          </ScrollView>
        </View>
      </Container>
    )
  }

}

export default CharacterDetail