import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchAPI } from './redux/actions';
import characterCard from './components/CharacterCard';

class App extends React.Component {
  state = { 
    character: '',
  }

  render() {
    const { character } = this.state;
    const { dispatch } = this.props;
  return (
    <div className="App">
      <h1>Insira um personagem de Game of Thrones</h1>
      <input
          type="text"
          onChange={ ({ target }) => this.setState({ character: target.value }) }
          value={ character }
        />
           <button
          type="button"
          onClick={ () => dispatch(fetchAPI(character)) }
        >
          Search
        </button>
      <characterCard />

    </div>
  );
}
}

// const mapStateToProps = (state) => ({
//   imgPath: state.imgURL.file,
//   isLoading: state.isLoading,
//   useDefaultImg: state.defaultImg,
// });

export default connect(null)(App);
