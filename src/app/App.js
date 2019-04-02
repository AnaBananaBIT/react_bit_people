import React, { Component } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import UsersPage from './../view/UsersPage'
import fetchPeople from './../services/FetchPeople'
import PostCard from './../view/PostCard'
import Search from '../components/Search'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
      searchPeople: [],
      useGridLayout: false,
      handleToggleClick: this.handleToggleClick.bind(this)
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
    const { people } = this.state;
    let searchQuery = event.target.value.toLowerCase()
    const result = people.filter(user => user.name.toLowerCase().includes(searchQuery))
    this.state({
      searchPeople: result
    })
  }

  render() {
    const { people, searchPeople, useGridLayout } = this.state;

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
