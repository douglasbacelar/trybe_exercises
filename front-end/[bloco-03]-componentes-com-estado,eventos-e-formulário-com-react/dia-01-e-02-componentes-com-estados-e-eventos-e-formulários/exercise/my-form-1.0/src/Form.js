import React from 'react';
import AnecdoteInput from './AnecdoteInput';
import NameInput from './NameInput';
import SelectInput from './SelectInput';

class Form extends React.Component {
  state = {
    email: '',
    name: '',
    age: '',
    anecdote: '',
    checkbox: '',
    file: '',
    formComErros: true,
  }

  handleError = () => {
    const { email, name, age, anecdote, checkbox, file } =this.state;
    const errorCases = [
      !name.length,
      !email.match(/^\S+@\S+$/i),
      !age.length,
      !anecdote.length,
      !checkbox,
      !file,
    ];
    const formCompleted = errorCases.every((error) => error !== true);

    this.setState({
      formComErros: !formCompleted,
    })
  ;}

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    },this.handleError);
  }

  render() {
    const { email, name, age, anecdote, formComErros, checkbox, file } =this.state;
    return (
      <div>
        <form className='form'>
          <fieldset>
            <SelectInput 
            age= { age }
            handleChange={ this.handleChange }
            />

            <NameInput 
              name = { name }
              handleChange= { this.handleChange }
            />

          <label htmlFor='email'>
            Email:
            <input
              id='email'
              name='email'
              type='email'
              onChange={ this.handleChange }
              value={ email }
            />
          </label>
          </fieldset>
          <fieldset>
            <AnecdoteInput 
              anecdote={ anecdote }
              handleChange={ this.handleChange }
            />

          <label htmlFor='checkbox'>
            <input
              id='checkbox'
              name='checkbox'
              type='checkbox'
              onChange={ this.handleChange }
              value={ checkbox }
            />
          </label>

          <label htmlFor='file'>
            <input
              id='file'
              name='file'
              type='file'
              onChange={ this.handleChange }
              value={ file }
            />
          </label>
          </fieldset>
        </form>
        { formComErros  ? <span style={{ color: 'red' } }>Preencha todos os campos</span>
          : <span style={ { color: 'green' } }>Todos campos foram preenchidos</span> }
      </div>
    )
  }
};

export default Form;