import characters from '../characters'

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

export const getHouses = () => {
  const dupHouses = characters.map(character => getHouse(character.houseId,
    character.houseName,
    character.houseImageUrl));
  const result = [];
  dupHouses.forEach(house => {
    if (house && !result.find((h) => h.id == house.id)) result.push(house)
  })
  return result
}