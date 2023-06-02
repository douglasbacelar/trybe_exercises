import React from 'react';
import Loading from './Loading';
import PersonCard from './PersonCard';

class PersonDetails extends React.Component {
  state = {
    person: [],
    loading: true,
  }

  shouldComponentUpdate(_nextProps, nextState) {
     const age = 50;
     if (nextState.person[0].dob.age < age) return true
  }

  fetchApi = async () => {
    const URL_API = 'https://api.randomuser.me/';
    const request = await fetch(URL_API);
    const response = await request.json();
    this.setState({
      person: response.results,
      loading: false,
    })
  }

  componentDidMount = async () => {
    this.fetchApi();
  }

  getUserElements = (user) => {
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.age,
      image: user.picture.thumbnail,
    }
  }

  render() {
    const { loading, person } = this.state;
    if (loading) return <Loading />
    return (
      <div>
        <PersonCard 
        person={ this.getUserElements(person[0])}
        />
      </div>
    )
  }
};

export default PersonDetails;