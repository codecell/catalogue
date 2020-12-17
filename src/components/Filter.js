import React from 'react';
import PropTypes from 'prop-types';

import styles from '../css/app.module.css';
import companies from '../utils';

const Filter = ({ handleChange }) => (
  <form className={styles.filterForm} style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
    <span>Choose Company: </span>
    <select
      name="company"
      onChange={handleChange}
      className={styles.select}
    >
      <option disabled defaultValue hidden>Select Company</option>
      {companies.map(item => (
        <option value={item} key={item}>{item}</option>
      ))}
    </select>
  </form>
);

Filter.propTypes = {
  handleChange: PropTypes.func,
};

Filter.defaultProps = {
  handleChange: () => {},
};

export default Filter;
