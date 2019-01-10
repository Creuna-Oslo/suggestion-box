import React from 'react';
import PropTypes from 'prop-types';
import { getColor } from '../../sharedFunctions';

const Filter = props => (
  <div className="filter">
    {props.filterOptions.map((filter, index) => (
      <label key={`${filter}-filter`}>
        <input
          type="checkbox"
          onChange={() => props.handleChange(filter)}
          className={getColor(index)}
        />
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
