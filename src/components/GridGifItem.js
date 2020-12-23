import React from 'react';
import PropTypes from 'prop-types';

function GridGifItem({ title, url }) {
  return (
    <div className="card animate__animated animate__slideInUp">
      <img src={url} alt={title} className="images" />
      <h3> {title} </h3>
    </div>
  );
}

GridGifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GridGifItem;
