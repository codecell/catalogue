import { FETCH_CATALOGUE_SUCCESS, FETCH_CATALOGUE_FAILURE } from './types'



/**
 * @description fetchCatalogue - The action creator to query company's income-statement
 */
const fetchCatalogue = (company = 'AAPL') => {
  return async (dispatch) => {
    const url = `https://financialmodelingprep.com/api/v3/income-statement/${company}?limit=120&apikey=${process.env.FINANCIAL_MODELLING_API_KEY}`;

    try {
      const response = await axios.get(url)

      dispatch({
        type: FETCH_CATALOGUE_SUCCESS,
        payload: response.data,
        error: ''
      });
    } catch(error) {
      dispatch({
        type: FETCH_CATALOGUE_FAILURE,
        payload: {},
        error: error.response.data.msg
      });
    }    
  }
}

export {
  fetchCatalogue,
}