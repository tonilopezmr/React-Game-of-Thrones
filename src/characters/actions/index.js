export const SELECT_CHARACTER = 'SELECT_CHARACTER';

export const selectCharacter = (char) => ({
  type: SELECT_CHARACTER,
  payload: char
})