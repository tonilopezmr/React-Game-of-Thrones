
export const LIST_HOUSES_SUCCESS = 'LIST_HOUSES_SUCCESS'
export const LIST_HOUSES_REQUEST = 'LIST_HOUSES_REQUEST'
export const LIST_HOUSES_ERROR = 'LIST_HOUSES_ERROR'

const isFetching = (state) =>
  state.houses.isFetching

export const fetch = () => (dispatch, getState, api) => {
  if(isFetching(getState())){
    return Promise.resolve()
  }

  dispatch({
    type: LIST_HOUSES_REQUEST
  })

  return api.fetchHouses().then(
    response => {
      dispatch({
        type: LIST_HOUSES_SUCCESS,
        response: response
      })
    },
    error => {
      dispatch({
        type: LIST_HOUSES_ERROR,
        response: error.message || 'Error when fetch houses'
      })
    }
  )
}