import { CHANGE_TEXTFIELD } from './constants';

export const setTextField = (text) => ({
    type: CHANGE_TEXTFIELD,
    payload: text,
});