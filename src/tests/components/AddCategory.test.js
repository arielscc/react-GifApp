import React from 'react';
const { default: AddCategory } = require("../../components/AddCategory");
const { shallow } = require("enzyme");
import '@testing-library/jest-dom'

describe('Testing component <AddCategory/>', () => {

  const setCategories = jest.fn()
  let wrapper = shallow( <AddCategory setCategories={ setCategories }/> )

  beforeEach( () => {
    wrapper = shallow( <AddCategory setCategories={ setCategories }/> )
    jest.clearAllMocks();
  } )

  test('AddCategory snapshot test', () => {
    expect( wrapper ).toMatchSnapshot()
  });

  test('Must change a input text', () => {
    const input = wrapper.find( 'input' );
    const value = 'Hola mundo'
    input.simulate( 'change', { target:{ value } } )
    const finalValue = wrapper.find( 'p' ).text().trim()

    expect( finalValue ).toBe( value )
  });

  test('No debe postear la información con submit', () => {
    wrapper.find( 'form' ).simulate( 'submit', { preventDefault(){} })
    expect( setCategories ).not.toHaveBeenCalled()
  });

  test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
    const value = 'hola mundito';

    wrapper.find( 'input' ).simulate( 'change', { target:{ value }} );
    wrapper.find( 'form' ).simulate( 'submit', { preventDefault(){} } )

    expect( setCategories ).toHaveBeenCalled();

    expect( setCategories ).toHaveBeenCalledTimes(1);

    expect( setCategories ).toHaveBeenCalledWith( expect.any( Function ));

    expect( wrapper.find('input').prop('value') ).toBe('')

  });
});