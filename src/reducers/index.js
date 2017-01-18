import {combineReducers} from 'redux';
import characters from '../characters/reducers';
import houses from '../houses/reducers';

const rootReducer = combineReducers({
    houses,
    characters
});

export default rootReducer;