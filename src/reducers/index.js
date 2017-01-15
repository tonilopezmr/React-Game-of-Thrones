import {combineReducers} from 'redux';
import characters from '../characters/reducers';
import housesReducer from '../houses/reducers';

const rootReducer = combineReducers({
    houses: housesReducer,
    characters
});

export default rootReducer;