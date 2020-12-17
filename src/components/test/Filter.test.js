import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Filter from '../Filter';

afterEach(cleanup);

test('renders choose company span', () => {
  const state = {
    catalogue: {
      catalogue: [
        { date: '2018-12-10', symbol: 'AA', acceptedDate: '2018-12-18' },
      ],
    },
    apiError: '',
  };
  const mockStore = configureStore();
  const store = mockStore(state);

  const { getByText } = render(
    <Provider store={store}>
      <Filter />
    </Provider>,
  );

  expect(getByText(/Choose Company/i)).toBeInTheDocument();
});
