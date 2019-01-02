import React from 'react';
import PropTypes from 'prop-types';

const formatNumber = (number, size) => {
  var s = number.toString();
  if (s.length < size) {
    s = '0'.concat(s);
    return formatNumber(s, size);
  } else {
    return s;
  }
};

Number.prototype.pad = function(size) {
  var s = this.toString();
  while (s.length < size) {
    s = '0'.concat(s);
  }
  return s;
};

const Date = props => {
  const date = props.date;

  return (
    <div className="date">
      <span>{`${date.getDate()}/${date.getMonth() +
        1}/${date.getFullYear()}`}</span>
      <span>{`${date.getHours()}:${formatNumber(date.getMinutes(), 2)}`}</span>
    </div>
  );
};

Date.propTypes = {
  date: PropTypes.object
};

export default Date;
