import React, { Component } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import UsersPage from './../view/UsersPage'
import fetchPeople from './../services/FetchPeople'
import PostCard from './../view/PostCard'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
      useGridLayout: false,
      handleToggleClick: this.handleToggleClick.bind(this),
    }
  }
  handleToggleClick = () => {
    this.setState({ useGridLayout: !this.state.useGridLayout })
    localStorage.setItem('useGridLayout', !this.state.useGridLayout)
  }

  handleRefresh = () => {
    fetchPeople()
      .then((users) => {
        this.setState({ people: users })
      })

  }
  componentDidMount() {
    fetchPeople()
      .then((users) => {
        this.setState({
          people: users,
          useGridLayout: JSON.parse(localStorage.getItem('useGridLayout'))
        })


      })
  }


  render() {
    const { people, useGridLayout } = this.state;

    return (
      <>
        <Header onToggleClick={this.handleToggleClick} onRefresh={this.handleRefresh} />
        {useGridLayout
          ? <PostCard users={people} />
          : <UsersPage users={people} />
        }

        <Footer />
      </>
    );
  }
}

export default App;
