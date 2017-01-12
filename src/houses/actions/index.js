import {getHouses} from '../fakeHousesDatabase'

export const LIST_HOUSES = 'LIST_HOUSES'

export const fetchHouses = () => ({
  type: LIST_HOUSES,
  response: getHouses()
})