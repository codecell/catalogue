/* eslint-disable import/prefer-default-export, no-unused-vars, no-console */
import axios from 'axios';
import { FETCH_CATALOGUE_SUCCESS, FETCH_CATALOGUE_FAILURE } from './types';

/**
 * @description fetchCatalogue - The action creator to query company's income-statement
 */
const fetchCatalogue = company => async dispatch => {
  const url = `https://financialmodelingprep.com/api/v3/income-statement/${company}?limit=120&apikey=demo`;
  // const url = `https://financialmodelingprep.com/api/v3/income-statement/${company}?limit=120&apikey=${process.env.REACT_APP_API_KEY}`;

  try {
    const response = await axios.get(url);

    dispatch({
      type: FETCH_CATALOGUE_SUCCESS,
      payload: response.data,
      error: '',
    });
  } catch (error) {
    console.log(error, '>>>>Data');
    dispatch({
      type: FETCH_CATALOGUE_FAILURE,
      payload: {},
      apiError: error.response,
    });
  }
};

export {
  fetchCatalogue,
};
