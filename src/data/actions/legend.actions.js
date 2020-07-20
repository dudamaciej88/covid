import { SET_SHOW } from "../constants";

export const setShow = (name, isShow) => {
    return {
        type: SET_SHOW,
        payload: [name, isShow],
    }
}