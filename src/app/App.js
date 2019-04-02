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
      useGridLayout: true,
      handleToggleClick: this.handleToggleClick.bind(this),
      // refreshing: true,
      // handleRefresh: this.handleRefresh.bind(this)

    }
  }
  handleToggleClick = () => {
    this.setState({
      useGridLayout: !this.state.useGridLayout
    })
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
        this.setState({ people: users })
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
