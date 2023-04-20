// ./src/components/CharacterCard.js
import React from 'react';
import { connect } from 'react-redux';

class CharacterCard extends React.Component {
  render() {
    const { imgURL, isLoading, error } = this.props;
    if (!isLoading && imgURL) {
      return (
        <ul>
          <li>Name: {imgURL.name}</li>
          <li>Born: {imgURL.born}</li>
          <li>
            Titles:
            <ol>
              {imgURL.titles.map((title, index) => (
                <li key={`${title}-${index}`}>{title}</li>
              ))}
            </ol>
          </li>
          <li>
            Aliases:
            <ol>
              {imgURL.aliases.map((alias, index) => (
                <li key={`${alias}-${index}`}>{alias}</li>
              ))}
            </ol>
          </li>
        </ul>
      );
    }
    if (error) { return <div>{error}</div>; }
    if (isLoading) { return <h3>Loading...</h3>; }
    return <div>Type a character name and click to search!</div>;
  }
}

const mapStateToProps = (state) => ({
  imgURL: state.imgURL,
  isLoading: state.isLoading,
  error: state.error,
});

export default connect(mapStateToProps)(CharacterCard);
