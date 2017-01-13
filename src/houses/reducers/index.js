import {LIST_HOUSES} from '../actions'

const housesReducer = (state = [], action) => {
  switch (action.type) {
    case LIST_HOUSES:
      return action.response
    default:
      return state
  }
}

export default housesReducer
