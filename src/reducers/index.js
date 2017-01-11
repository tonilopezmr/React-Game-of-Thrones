import {combineReducers} from 'redux';
import charactersReducer from '../characters/reducers';
import housesReducer from '../houses/reducers';
import routerReducer from './router.reducer';

const rootReducer = combineReducers({
    houses: housesReducer,
    characters: charactersReducer,
    routes: routerReducer
});

export default rootReducer;