import React from 'react';

class Form extends React.Component {
  state = {
    email: '',
  }

  handleChange = ({ target }) => {
    this.setState({
      email: target.value,
    });
  }

  render() {
    const { email } =this.state;

    return (
      <div>
        <form className='form'>

          <label htmlFor='age'>
            <select
              id='age'
              name='age'
              defaultValue=''
            >
              <option value=''>Selecione</option>
              <option value='adult'>Maior que 18</option>
              <option value='underage'>Menor que 18</option>
            </select>
          </label>

          <label htmlFor='name'>
            Nome:
            <input
              id='name'
              name='name'
              type='text'
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

          <label htmlFor='textarea'>
            Anedota:
            <textarea 
              id='textarea'
              name='textarea'
            />
          </label>      

        </form>

      </div>
    )
  }
};

export default Form;