'use strict'

import React, { Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Navigator
} from 'react-native'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider, connect} from 'react-redux'
import {Router} from 'react-native-router-flux'

import reducers from './reducers'
import AppScenes from './Scenes'

const RouterWithRedux = connect()(Router)
const middleware = [];
const store = compose(applyMiddleware(...middleware)(createStore)(reducers))

export default class GameOfThrones extends Component {
    render() {
        return(
            <Provider store={store}>
                <RouterWithRedux>
                    {AppScenes}
                </RouterWithRedux>
            </Provider>
        )
    }
}

AppRegistry.registerComponent('GameOfThrones', () => GameOfThrones)
