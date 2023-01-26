import React from 'react';
import SelectInput from './SelectInput';

class Form extends React.Component {
  state = {
    email: '',
    name: '',
    age: '',
    textarea: '',
    checkbox: false,
    file: '',
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, name, age, textarea, checkbox, file } =this.state;
    return (
      <div>
        <form className='form'>
          <fieldset>
            <SelectInput 
            age= { age }
            handleChange={ this.handleChange }
            />

          <label htmlFor='name'>
            Nome:
            <input
              id='name'
              name='name'
              type='text'
              onChange={ this.handleChange }
              value={ name }
            />      
          </label>

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
          <label htmlFor='textarea'>
            Anedota:
            <textarea 
              id='textarea'
              name='textarea'
              onChange={ this.handleChange }
              value={ textarea }
            />
          </label>   

          <label htmlFor='checkbox'>
            <input
              id='checkbox'
              name='checkbox'
              type='checkbox'
              checked={ this.handleChange }
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

      </div>
    )
  }
};

export default Form;