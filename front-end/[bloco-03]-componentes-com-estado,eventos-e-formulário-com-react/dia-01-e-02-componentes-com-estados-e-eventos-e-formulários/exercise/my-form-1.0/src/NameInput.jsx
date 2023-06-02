import React from 'react';
import PropTypes from 'prop-types';

class NameInput extends React.Component {
  render() {
    const { name, handleChange } = this.props;
    const limitCaracteres = 80;
    return (
      <label htmlFor='name'>
      Nome:
      <input
        id='name'
        name='name'
        type='text'
        onChange={ handleChange }
        value={ name }
      />
      { !name ? 'O nome precisa ser preenchido' : '' }
      { name.lenght > limitCaracteres ? 'O nome não pode ter mais que 80 caracteres' : ''}
    </label>
    )
  }
}

NameInput.propTypes = {
  name: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default NameInput;