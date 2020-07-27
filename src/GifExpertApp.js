import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['goku'])

  return (
    <>
      <h2>Gift Expert App</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr />
      {
        categories.map( category =>
          <GifGrid
            key = { category }
            category = { category } />
          )
      }
    </>
  )
}
export default GifExpertApp;