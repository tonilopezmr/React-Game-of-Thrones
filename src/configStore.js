import {applyMiddleware} from 'redux'
import reducers from './reducers'
import Reactotron from 'reactotron-react-native'
import thunk from 'redux-thunk'
import apiFactory from './apiFactory'

const middleware = [thunk.withExtraArgument(apiFactory(true))];
const store =  Reactotron.createStore(reducers, applyMiddleware(...middleware))

export default store
