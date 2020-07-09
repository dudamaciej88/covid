import {
  STATS_GET,
  STATS_GET_REQUEST,
  STATS_GET_SUCCESS,
  STATS_GET_FAILURE,
  LOADING_STATES,
} from "../constants";

const initialState = {
  loadingState: {
    STATS_FETCHED: false,
  },
  stats: {},
  countries: {},
};

function stats(state = initialState, action) {
  const newLoadingState = { ...state.loadingState };

  switch (action.type) {
    case STATS_GET_REQUEST:
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          [action.type]: LOADING_STATES.LOADING,
        },
      };
    case STATS_GET_SUCCESS:
      delete newLoadingState.STATS_GET_REQUEST;
      return {
        ...state,
        stats: action.payload,
        loadingState: newLoadingState,
      };
    case STATS_GET_FAILURE:
      delete newLoadingState.STATS_GET_REQUEST;
      return {
        ...state,
        // stats: action.payload,
        loadingState: newLoadingState,
      };
    default:
      return state;
  }
}

export default stats;
