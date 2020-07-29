import React from 'react'
import GifExpertApp from "../GifExpertApp";
import { shallow } from "enzyme";
import '@testing-library/jest-dom'


describe('Test del componente <GiftExpertApp/>', () => {


  test('Probando el componente con el snapshot', () => {
    const wrapper = shallow( <GifExpertApp /> );
    expect( wrapper ).toMatchSnapshot();
  });

  test('debe mostrar una lista de categorias', () => {
    const categories = [ 'One punch', 'Dragon Ball'];
    const wrapper = shallow( <GifExpertApp defaultCategories = { categories }/> );

    expect( wrapper.find( 'GifGrid' ).length ).toBe( categories.length)
  });

});