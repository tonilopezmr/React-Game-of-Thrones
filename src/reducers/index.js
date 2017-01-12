import {combineReducers} from 'redux';
import charactersReducer from '../characters/reducers';
import housesReducer from '../houses/reducers';

const rootReducer = combineReducers({
    houses: housesReducer,
    characters: charactersReducer,
});

export default rootReducer;