import GifGrid  from "../../components/GifGrid";
import React from 'react'

import { shallow } from "enzyme";
import '@testing-library/jest-dom'
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock('../../hooks/useFetchGifs');




describe('Pruebas del componente <GifGrid/>', () => {
  const category = 'Dragon Ball';
  // let wrapper = shallow( <GifGrid  category = { category }/>);
  // beforeEach( () => {
  //   wrapper = shallow( <GifGrid  category = { category }/>);
  // })
  
  test('Comparando con el snapshot', () => {
    
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    })
    const wrapper = shallow( <GifGrid  category = { category }/>);
    expect( wrapper ).toMatchSnapshot()
  });
  
  test('Debe de mostrar items cuando se cargan imagenes de useFetchGrid', () => {
    const gifs = [{
      id: 'abc',
      url: 'http://alguna-imagen.net/imagen.gif',
      title: 'cualquier cosa'
    }]
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    })

    const wrapper = shallow( <GifGrid  category = { category }/>);
    expect( wrapper ).toMatchSnapshot()
    
  });
});