const { shallow } = require("enzyme");


const { default: GridGifItem } = require("../../components/GridGifItem");

import React from 'react'
import '@testing-library/jest-dom'

const datos = {
  title : 'Titulo del test',
  url : 'https://algunaurl.com'
}
const wrapper = shallow( <GridGifItem { ...datos} /> )

describe('Probando el componente Grid Gif Item', () => {
  test('El componente debe hacer match con el snapshot', () => {
    expect( wrapper ).toMatchSnapshot()
  });

  test('Debe de tener un titulo', () => {
    const title = wrapper.find( 'h3' );
    expect( title.text().trim() ).toBe( datos.title );
  });

  test('Debe de tener un src y alt', () => {
    const img = wrapper.find( 'img' );
    expect(img.prop('src') ).toBe( datos.url );
    expect(img.prop('alt') ).toBe( datos.title );
  });

  test('debe de tener la clase animate__slideInUp', () => {
    const className = 'animate__slideInUp';
    const div = wrapper.find( 'div' )
    expect( div.hasClass( className ) ).toBe( true )
  });
});