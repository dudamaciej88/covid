import {
  STATS_GET_REQUEST,
  STATS_GET_SUCCESS,
  STATS_GET_FAILURE,
  STATS_RESET
} from "../constants";

import axios from "axios";



export const fetchStats = (country, selectorNumber) => {
  return (dispatch) => {
    dispatch({ type: STATS_GET_REQUEST });
    axios
      .get(`https://disease.sh/v3/covid-19/historical/${country}?lastdays=all`)
      .then((response) => {
        const data = response.data
        dispatch({ type: STATS_GET_SUCCESS, payload: {data, selectorNumber} });
      })
      .catch((error) => {
        dispatch({
          type: STATS_GET_FAILURE,
        });
      });
  };
};

export const statsReset = (selectorNr) => {
  return {
    type: STATS_RESET,
    payload: selectorNr
  }
}
