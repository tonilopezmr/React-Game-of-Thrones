import {
  LIST_CHARACTERS_SUCCESS,
  LIST_CHARACTERS_REQUEST,
  LIST_CHARACTERS_ERROR
} from '../actions'
import {combineReducers} from 'redux';

const list = (state = [], action) => {
  switch (action.type) {
    case LIST_CHARACTERS_SUCCESS:
      return action.response
    default:
      return state
  }
}

const isFetching = (state = false, action) => {
  switch (action.type) {
    case LIST_CHARACTERS_REQUEST:
      return true
    case LIST_CHARACTERS_SUCCESS:
      return false
    case LIST_CHARACTERS_ERROR:
      return false
    default:
      return state
  }
}

const error = (state = false, action) => {
  switch (action.type) {
    case LIST_CHARACTERS_SUCCESS:
      return false
    case LIST_CHARACTERS_ERROR:
      return true
    default:
      return state
  }
}

export default combineReducers({
  list,
  isFetching,
  error
})