/* eslint-disable  no-unused-vars, no-console,
  jsx-a11y/click-events-have-key-events,
  jsx-a11y/no-static-element-interactions, jsx-a11y/label-has-associated-control,
  jsx-a11y/anchor-is-valid
  */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter, Switch, Route, Link,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './App.module.css';
import { fetchCatalogue } from '../actions';
import companies from '../utils';

function App({ forUnitTesting }) {
  const catalogue = useSelector(state => state.catalogue.catalogue);
  const apiError = useSelector(state => state.catalogue.apiError);
  const [goToRoute, setGoToRoute] = useState(false);

  const dispatch = useDispatch();
  const [company, setCompany] = useState('AAPL');

  // Make initial API call
  useEffect(() => {
    dispatch(fetchCatalogue(company));
  }, [company]);

  // Update state with selected company
  const onCompanySelect = event => {
    event.preventDefault();

    const selectedCompany = event.target.value;
    setCompany(selectedCompany);
    dispatch(fetchCatalogue(selectedCompany));
  };

  return (
    <BrowserRouter>
      <main data-testid="appId" className={`${styles.container}`}>
        {forUnitTesting}
        <h2 className={styles.header}>
          {`${company} 's Income Statement`}
        </h2>
        {apiError && (
        <h3>
          $
          {apiError}
        </h3>
        )}
        <form className={styles.filterForm} style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
          <span>Choose Company: </span>
          <select
            name="company"
            onChange={event => onCompanySelect(event)}
            className={styles.select}
          >
            <option disabled defaultValue hidden>Select Company</option>
            {companies.map(item => (
              <option value={item} key={item}>{item}</option>
            ))}
          </select>
        </form>
        <section style={{ display: 'flex', flexWrap: 'wrap' }}>
          {goToRoute ? (
            <Switch
              path="/"
              exact
            >
              {(catalogue.length > 0 && typeof (catalogue === Array)) && catalogue.map(({
                symbol, date, netIncome, revenue, period, acceptedDate,
                generalAndAdministrativeExpenses, grossProfit, grossProfitRatio,
                incomeBeforeTax, incomeTaxExpense, interestExpense,
              }) => (
                <Route
                  path={`/${symbol}${date}`}
                  key={`${symbol}${acceptedDate}`}
                >
                  <h3 className={styles.detailsHeader}>
                    Statement details for
                    {` ${date}`}
                  </h3>
                  <div
                    className={styles.pageDetailsCard}
                    style={{ margin: '1em auto' }}
                  >
                    <p>
                      Date:
                      {`  ${date}`}
                    </p>
                    <p>
                      General Expenses:
                      {`  ${generalAndAdministrativeExpenses}`}
                    </p>
                    <p>
                      Gross Profit:
                      {`  ${grossProfit}`}
                    </p>
                    <p>
                      Gross Profit Ratio(GPR):
                      {`  ${grossProfitRatio}`}
                    </p>
                    <p>
                      Income Before Tax:
                      {`  ${incomeBeforeTax}`}
                    </p>
                    <p>
                      Income Tax expense:
                      {`  ${incomeTaxExpense}`}
                    </p>
                    <p>
                      Interest Expense:
                      {`  ${interestExpense}`}
                    </p>
                    <p>
                      Net Income:
                      {`  ${netIncome}`}
                    </p>
                    <p>
                      period:
                      {`  ${period}`}
                    </p>
                    <p>
                      Revenue:
                      {`  ${revenue}`}
                    </p>
                    <a href="/">
                      Back to Home
                    </a>
                  </div>
                </Route>
              ))}
            </Switch>
          )
            : (catalogue.length > 0 && typeof (catalogue === Array)) && catalogue.map(({
              symbol, date, netIncome, revenue, acceptedDate,
              grossProfit, incomeBeforeTax, interestExpense,
            }) => (
              <Link
                to={`/${symbol}${date}`}
                onClick={() => {
                  setGoToRoute(true);
                }}
                key={`${symbol}${acceptedDate}`}
                className={styles.itemCard}
              >
                <p>
                  Date:
                  {`  ${date}`}
                </p>
                <p>
                  Gross Profit:
                  {`  ${grossProfit}`}
                </p>
                <p>
                  Income Before Tax:
                  {`  ${incomeBeforeTax}`}
                </p>
                <p>
                  Interest Expense:
                  {`  ${interestExpense}`}
                </p>
                <p>
                  Net Income:
                  {`  ${netIncome}`}
                </p>
                <p>
                  Revenue:
                  {`  ${revenue}`}
                </p>
              </Link>
            ))}
        </section>
      </main>
    </BrowserRouter>
  );
}

App.propTypes = {
  forUnitTesting: PropTypes.string,
};

App.defaultProps = {
  forUnitTesting: '',
};

export default App;
