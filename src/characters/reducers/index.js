import {LIST_CHARACTERS} from '../actions'

const charactersReducer = (state = [], action) => {
  switch (action.type) {
    case LIST_CHARACTERS:
      return action.response
    default:
      return state
  }
}

export default charactersReducer