import React, {Component} from 'react'
import {
  AppRegistry,
} from 'react-native'
import {Provider, connect} from 'react-redux'
import {Router, Scene} from 'react-native-router-flux'
import HomePage from "./HomePage"
import store from './configStore'

const RouterWithRedux = connect()(Router)

export default class GameOfThrones extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root">
            <Scene key="home" hideNavBar component={HomePage} title="Game of Thrones"/>
          </Scene>
        </RouterWithRedux>
      </Provider>
    )
  }
}

AppRegistry.registerComponent('GameOfThrones', () => GameOfThrones)
