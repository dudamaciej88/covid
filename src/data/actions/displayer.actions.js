import {SET_DISPLAY} from "../constants";

export const setDisplay = (name) => {
    return {
        type: SET_DISPLAY,
        payload: name
    }
}