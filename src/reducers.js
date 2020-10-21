import { CHANGE_TEXTFIELD, CHANGE_PAGES, PAGINATE, PREVIOUS_PAGE, NEXT_PAGE, LOAD } from './constants';

const initialState = {
    textField: '',
    currentPage: 1,
    booksPerPage: 10,
    loading: false,
}

export const reducer = (state=initialState, action={}) => {
    switch (action.type) {
        case CHANGE_TEXTFIELD:
            return {...state, textField: action.payload}
        case CHANGE_PAGES:
            return {
                ...state,
                booksPerPage: action.payload
            }
        case NEXT_PAGE:
            return {
                ...state,
                currentPage: state.currentPage + 1,
            }
        case PREVIOUS_PAGE:
            return {
                ...state,
                currentPage: state.currentPage - 1,
            }
        case PAGINATE:
            return {
                ...state,
                currentPage: action.payload,
            }
        default:
            return state;
    }
};