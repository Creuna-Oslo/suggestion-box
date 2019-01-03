import React from 'react';
import PropTypes from 'prop-types';

const Filter = props => (
  <div className="filter">
    {props.filterOptions.map(filter => (
      <label key={`${filter}-filter`}>
        <input type="checkbox" onChange={() => props.handleChange(filter)} />
        <span>{filter}</span>
      </label>
    ))}
  </div>
);

Filter.propTypes = {
  handleChange: PropTypes.func,
  filterOptions: PropTypes.array
};
export default Filter;
