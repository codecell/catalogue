import { cleanup } from '@testing-library/react';
import catalogueReducer from '../catalogue';
import { FETCH_CATALOGUE_SUCCESS, FETCH_CATALOGUE_FAILURE } from '../../actions/types';

afterEach(cleanup);

const initState = {
  catalogue: [],
  apiError: '',
};

const successAction = {
  type: FETCH_CATALOGUE_SUCCESS,
  payload: [{ date: '2020-12-10' }],
  error: '',
};

const expectedResolvedSuccessStore = {
  catalogue: [{ date: '2020-12-10' }],
  apiError: '',
};

const failureAction = {
  type: FETCH_CATALOGUE_FAILURE,
  payload: {},
  apiError: 'fetch error',
};

const expectedResolvedFailureStore = {
  catalogue: [],
  apiError: 'fetch error',
};

it('Returns default intial state when no action is called', () => {
  expect(catalogueReducer(initState, '')).toEqual(initState);
});

it('Updates the state new catalog list on receiving a SUCCESS action', () => {
  expect(catalogueReducer(initState, successAction)).toEqual(expectedResolvedSuccessStore);
});

it('Resolves catalog list to an empty array on receiving a FAILURE action', () => {
  expect(catalogueReducer(initState, failureAction)).toEqual(expectedResolvedFailureStore);
});
