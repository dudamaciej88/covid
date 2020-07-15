import {
  STATS_GET_REQUEST,
  STATS_GET_SUCCESS,
  STATS_GET_FAILURE,
  LOADING_STATES,
  STATS_RESET
} from "../constants";

const initialState = {
  loadingState: {
    STATS_FETCHED: false,
  },
  stats: {
    1: {},
    2: {}
    
  },
  
};

function stats(state = initialState, action) {
  const newLoadingState = { ...state.loadingState };
  
  switch (action.type) {
    case STATS_RESET:
      const selectorNr = action.payload
      return {
        ...state,
        stats: {...state.stats, [selectorNr]: {}}
      }
    case STATS_GET_REQUEST:
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          [action.type]: LOADING_STATES.LOADING,
        },
      };
    case STATS_GET_SUCCESS:
      const selectorNumber = action.payload.selectorNumber
      delete newLoadingState.STATS_GET_REQUEST;
      return {
        ...state,
        stats: {...state.stats, [selectorNumber]: action.payload.data},
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
