import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import FetchPeople from './../services/FetchPeople'
import * as shared from './../shared/constants.js'
import './App.css';

const url = `${shared.BASE_API_URL}/?results=15`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
    }
  }

  componentDidMount() {
    fetch(url)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        this.setState({ people: data.results })
      })
  }


  render() {
    const { people } = this.state;

    return (
      <>
        <Header />
        <FetchPeople data={people} />
        <Footer />
      </>
    );
  }
}

export default App;
