import React from 'react';
import GridGifItem from './GridGifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { BallTriangle } from 'svg-loaders-react';
import PropTypes from 'prop-types';

function GifGrid({ category }) {
  const { data: images, loading } = useFetchGifs(category);

  // useEffect( () => {
  //   getGifs( category ).then( setImages )
  // }, [category])

  return (
    <div className="container__grid-gif">
      <h3 className="container-title animate__animated animate__flipInX">
        {' '}
        {category.toUpperCase()}{' '}
      </h3>

      <div className="loader">
        {loading && <BallTriangle stroke="#2B6CB0" />}
      </div>

      <div className="container">
        {images.map((item) => (
          <GridGifItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
