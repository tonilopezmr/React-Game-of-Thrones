import {combineReducers} from 'redux';
import charactersReducer from './character.reducer';
import housesReducer from './houses.reducer'
import routerReducer from './router.reducer';

const rootReducer = combineReducers({
    houses: housesReducer,
    characters: charactersReducer,
    routes: routerReducer
});

export default rootReducer;