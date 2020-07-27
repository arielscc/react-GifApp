import React, { useState, useEffect } from 'react'
import GridGifItem from './GridGifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { BallTriangle } from 'svg-loaders-react'
// import getGifs from '../helpers/getGifs';

function GifGrid( { category } ) {

  // const [images, setImages] = useState([])

  const { data:images, loading } = useFetchGifs( category );



  // useEffect( () => {
  //   getGifs( category ).then( setImages )
  // }, [category])

  return (
    <div>
      <h3 className="container-title animate__animated animate__flipInX"> { category.toUpperCase() } </h3>

      <div className="loader">
      { loading && <BallTriangle stroke="#2B6CB0"/>}
      </div>

      <div className="container">
        {
          images.map( item =>
          <GridGifItem
            key={ item.id }
            {... item }
          />
          )
        }
      </div>

    </div>
  )
}

export default GifGrid;