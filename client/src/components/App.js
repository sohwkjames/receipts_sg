import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import HeaderTwo from './Header/HeaderTwo';
import TaskList from './TaskList/TaskList';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="background-color-container">
        <HeaderTwo />
        <div className="container">
          <BrowserRouter>
            {/* <AddTaskModal /> */}
            <TaskList />
          </BrowserRouter>
        </div>
      </div>
    )
  }
};

export default connect(null, actions)(App);
