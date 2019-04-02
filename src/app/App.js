import React, { Component } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import UsersPage from './../view/UsersPage'
import fetchPeople from './../services/FetchPeople'
import PostCard from './../view/PostCard'
import Search from '../components/Search'
import Animation from '../components/Animation'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
      searchPeople: [],
      searchQuery: '',
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
        this.setState({
          people: users,
        })
      })

  }
  componentDidMount() {
    fetchPeople()
      .then((users) => {
        this.setState({
          people: users,
          searchPeople: users,
          useGridLayout: JSON.parse(localStorage.getItem('useGridLayout'))
        })
      })
  }



  searchUsers = (event) => {
    const searchQuery = event.target.value
    const result = this.state.people.filter(user => {
      return user.name.toLowerCase().includes(searchQuery)
    })
    this.setState({
      searchPeople: result

    })
  }
  render() {

    const { searchPeople, useGridLayout } = this.state;

    return (
      <>
        <Header onToggleClick={this.handleToggleClick} onRefresh={this.handleRefresh} />
        <Search onSearch={this.searchUsers} />
        {useGridLayout
          ? <PostCard users={searchPeople} />
          : <UsersPage users={searchPeople} />
        }

        <Footer />
      </>
    );
  }
}

export default App;
