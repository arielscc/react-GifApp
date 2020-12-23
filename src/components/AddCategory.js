import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddCategory({ setCategories }) {
  const [inputValue, setInputValue] = useState('');

  const changeValue = (e) => setInputValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((lastState) =>
        lastState.includes(inputValue)
          ? [...lastState]
          : [inputValue, ...lastState]
      );
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" value={inputValue} onChange={changeValue} />
      <button onClick={handleSubmit}>Adicionar</button>
    </form>
  );
}
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
