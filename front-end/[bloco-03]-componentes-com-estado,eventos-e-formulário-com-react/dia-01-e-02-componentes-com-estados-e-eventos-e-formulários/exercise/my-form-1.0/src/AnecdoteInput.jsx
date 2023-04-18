import React from 'react';
import PropTypes from 'prop-types';

class AnecdoteInput extends React.Component {
  render() {
    const { anecdote, handleChange } = this.props;
    return (
        <label htmlFor='anecdote'>
            Anedota:
            <textarea 
              id='anecdote'
              name='anecdote'
              onChange={ handleChange }
              value={ anecdote }
            />
            { !anecdote ? 'A anedota precisa ser preenchida' : ''}
          </label>   
    )
  }
}

AnecdoteInput.propTypes = {
  anecdote: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default AnecdoteInput;