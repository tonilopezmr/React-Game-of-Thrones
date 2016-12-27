import React, {Component} from 'react'
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button
} from 'native-base'

import {
    Platform
} from 'react-native'

import CharacterList from '../CharacterList'
import HouseList from '../HouseList'
import theme from '../../themes/theme'
import {Icon} from "native-base"

const CHARACTERS = 'characters'
const HOUSES = 'houses'
const platform = (Platform.OS === 'ios') ? 'ios' : 'md'

class HomePage extends Component {

    constructor(props){
        super(props)
        this.state = {
            selectedTab: CHARACTERS
        }
    }

    render() {
        return (
            <Container theme={theme}>
                <Header>
                        <Title>Game Of Thrones</Title>
                </Header>
				<Content>
                    {this.renderSelectedTab()}
				</Content>
                <Footer>
                    <FooterTab>
                        <Button
                            active={this.state.selectedTab == CHARACTERS}
                            onPress={() => this.showCharacters()}>
                            <Icon name={platform+'-person'} />
                            Characters
                        </Button>
                        <Button
                            active={this.state.selectedTab == HOUSES}
                            onPress={() => this.showHouses()}>
                            <Icon name={platform+'-home'} />
                            Houses
                        </Button>
                    </FooterTab>
                </Footer>
			</Container>
        )
    }

    showCharacters() {
        this.setState({
            selectedTab: CHARACTERS
        })
    }

    showHouses() {
        this.setState({
            selectedTab: HOUSES,
        })
    }

    renderSelectedTab() {
        switch(this.state.selectedTab){
            case HOUSES:
                return (<HouseList/>)
                break
            case CHARACTERS:
                return (<CharacterList/>)
                break
            default:
                (<CharacterList/>)
        }
    }
}

export default HomePage;