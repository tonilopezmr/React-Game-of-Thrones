import characters from './characters';

const initialState = {
    list: characters,
    activeCharacter: null
};

export default function charactersReducer(state=initialState, action) {
    switch (action.type) {
        case "LIST_CHARACTERS":
            return Object.assign({}, null, {list: action.payload})
        default:
            return state
    }
}