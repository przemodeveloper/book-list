import { CHANGE_TEXTFIELD } from './constants';

const initialState = {
    textField: ''
}

export const searchBooks = (state=initialState, action={}) => {
    switch (action.type) {
        case CHANGE_TEXTFIELD:
            return {...state, textField: action.payload}
        default:
            return state;
    }
};