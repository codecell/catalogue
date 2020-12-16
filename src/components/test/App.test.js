import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';

import App from '../App';

it('Renders without Crashing', () => {
  const div = document.createElement('div');
  const initialState = {
    catalogue: {
      catalogue: [{ date: '20-12-10' }, { date: '20-11-10' }, { date: '20-11-10' }],
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

it('renders Header text', () => {
  const initialState = {
    catalogue: {
      catalogue: [{ date: '20-12-10' }, { date: '20-11-10' }, { date: '20-11-10' }],
    },
    apiError: '',
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  expect(getByText(/Income Statement/i)).toBeInTheDocument();
});
