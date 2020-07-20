import { SET_DISPLAY } from "../constants";

const initialState = {
  display: "overall",
};

function displayer(state = initialState, action) {
  switch (action.type) {
    case SET_DISPLAY:
      return {
        ...state,
        display: action.payload,
      };
    default:
      return state;
  }
}

export default displayer;
