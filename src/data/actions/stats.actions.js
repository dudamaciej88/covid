import {
  STATS_GET_REQUEST,
  STATS_GET_SUCCESS,
  STATS_GET_FAILURE,
} from "../constants";

import axios from "axios";



export const fetchStats = (country) => {
  return (dispatch) => {
    dispatch({ type: STATS_GET_REQUEST });
    axios
      .get(`https://disease.sh/v3/covid-19/historical/${country}?lastdays=all`)
      .then((response) => {
        dispatch({ type: STATS_GET_SUCCESS, payload: response.data });
        console.log(response.data)
      })
      .catch((error) => {
        dispatch({
          type: STATS_GET_FAILURE,
        });
      });
  };
};
