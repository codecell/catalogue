import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { cleanup } from '@testing-library/react';

import App from '../App';

afterEach(cleanup);

it('Renders without Crashing', () => {
  const div = document.createElement('div');
  const initialState = {
    catalogue: {
      catalogue: [
        { date: '2018-12-10', symbol: 'AA', acceptedDate: '2018-12-18' },
        { date: '2018-12-11', symbol: 'AA', acceptedDate: '2019-12-19' },
        { date: '2020-12-10', symbol: 'AA', acceptedDate: '2018-12-23' },
      ],
    },
    apiError: '',
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  ReactDom.render(
    <Provider store={store}>
      <App />
    </Provider>, div,
  );
});
