
export const LIST_CHARACTERS_SUCCESS = 'LIST_CHARACTERS_SUCCESS'
export const LIST_CHARACTERS_REQUEST = 'LIST_CHARACTERS_REQUEST'
export const LIST_CHARACTERS_ERROR = 'LIST_CHARACTERS_ERROR'

const isFetching = (state) =>
  state.characters.isFetching

export const fetch = () => (dispatch, getState, api) => {
  if(isFetching(getState())) {
    return Promise.resolve()
  }

  dispatch({
    type: LIST_CHARACTERS_REQUEST
  })

  return api.fetchCharacters().then(
    response => {
      dispatch({
        type: LIST_CHARACTERS_SUCCESS,
        response: response
      })
    },
    error => {
      dispatch({
        type: LIST_CHARACTERS_ERROR,
        message: error.message || 'Error when fetch characters'
      })
    })
}