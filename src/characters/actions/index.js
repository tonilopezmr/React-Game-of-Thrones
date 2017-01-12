import characters from '../../characters'

export const LIST_CHARACTERS = 'LIST_CHARACTERS'

export const fetchCharacters = () => ({
  type: LIST_CHARACTERS,
  response: characters
})