import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import { setSearchField, fetchUsers } from '../actions';

class App extends Component {
  // constructor() {
  //   super()
  // }

  componentDidMount() {
    this.props.onFetchUser()
  }

  onSearchChange = (event) => {
    this.props.onSearchChange(event.target.value)
  }

  render() {
    const { searchfield, robots } = this.props;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    searchfield: state.searchRobots.searchField,
    robots : state.requestUsers.robots,
    isPending : state.requestUsers.isPending,
    error : state.requestUsers.error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange : (text) => dispatch(setSearchField(text)),
    onFetchUser : () => fetchUsers(dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);