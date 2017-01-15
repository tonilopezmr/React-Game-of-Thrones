import characters from './characters'

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

const getHouses = () => {
  const dupHouses = characters.map(character => getHouse(character.houseId,
    character.houseName,
    character.houseImageUrl));
  const result = [];
  dupHouses.forEach(house => {
    if (house && !result.find((h) => h.id == house.id)) result.push(house)
  })
  return result
}

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms))

function randomError() {
  if(Math.random() > 0.6) {
    throw new Exception()
  }
}

export const fetchCharacters = () =>
  delay(1000)
    .then(() => {
      randomError()
      return characters
    })

export const fetchHouses = () =>
  delay(700)
    .then(() => {
      return getHouses()
    })