import {
  LIST_HOUSES_SUCCESS,
  LIST_HOUSES_REQUEST,
  LIST_HOUSES_ERROR
} from '../actions'
import {combineReducers} from 'redux';

const list = (state = [], action) => {
  switch (action.type) {
    case LIST_HOUSES_SUCCESS:
      return action.response
    default:
      return state
  }
}

const isFetching = (state = false, action) => {
  switch (action.type) {
    case LIST_HOUSES_REQUEST:
      return true
    case LIST_HOUSES_SUCCESS:
      return false
    case LIST_HOUSES_ERROR:
      return false
    default:
      return state
  }
}

const error = (state = false, action) => {
  switch (action.type) {
    case LIST_HOUSES_SUCCESS:
      return false
    case LIST_HOUSES_ERROR:
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