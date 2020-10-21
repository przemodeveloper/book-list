import { CHANGE_TEXTFIELD, CHANGE_PAGES, NEXT_PAGE, PREVIOUS_PAGE, PAGINATE } from './constants';

export const setTextField = (text) => ({
    type: CHANGE_TEXTFIELD,
    payload: text,
});

export const setPages = (id) => ({
    type: CHANGE_PAGES,
    payload: id,
});

export const setNextPage = () => ({
    type: NEXT_PAGE,
});

export const setPreviousPage = () => ({
    type: PREVIOUS_PAGE,
});

export const setPaginate = (number) => ({
    type: PAGINATE,
    payload: number,
});