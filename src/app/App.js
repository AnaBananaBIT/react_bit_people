import React, { Component } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import UsersPage from './../components/UsersPage'
import fetchPeople from './../services/FetchPeople'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
    }
  }

  componentDidMount() {
    fetchPeople()
      .then((users) => {
        this.setState({ people: users })
      })
  }


  render() {
    const { people } = this.state;

    return (
      <>
        <Header />
        <UsersPage users={people} />
        <Footer />
      </>
    );
  }
}

export default App;
