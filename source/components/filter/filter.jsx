import React from 'react';
import PropTypes from 'prop-types';
import { getColorClass } from '../../sharedFunctions';

const Filter = props => (
  <div className="filter">
    <label>
      <input
        type="checkbox"
        checked={!!props.activeFilters.length < 1 && true}
        onChange={props.resetFilters}
      />
      <span>Alle</span>
    </label>
    {props.filterOptions.map((filter, index) => (
      <label key={`${filter}-filter`}>
        <input
          type="checkbox"
          onChange={() => props.updateFilters(filter)}
          className={getColorClass(index)}
          checked={props.activeFilters.includes(filter)}
        />
        <span>{filter}</span>
      </label>
    ))}
  </div>
);

Filter.propTypes = {
  updateFilters: PropTypes.func,
  resetFilters: PropTypes.func,
  filterOptions: PropTypes.array,
  activeFilters: PropTypes.array
};
export default Filter;
