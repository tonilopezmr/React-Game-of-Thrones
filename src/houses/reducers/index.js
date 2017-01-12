import characters from '../../characters';

const getHouse = (houseId, houseName, houseImageUrl) => {
  if (houseId == "" && houseName == "" && houseImageUrl == "") {
    return undefined
  }

  return {
    id: houseId,
    name: houseName,
    imageUrl: houseImageUrl
  }
}

var getHouses = () => {
  const dupHouses = characters.map(character => getHouse(character.houseId,
    character.houseName,
    character.houseImageUrl));
  const result = [];
  dupHouses.forEach(house => {
    if (house && !result.find((h) => h.id == house.id)) result.push(house)
  })
  return result
}

const initialState = {
  list: getHouses(),
  activeCharacter: null
};

export const LIST_HOUSES = 'LIST_HOUSES'

const housesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_HOUSES:
      return Object.assign({}, null, {list: action.payload})
    default:
      return state
  }
}

export default housesReducer
