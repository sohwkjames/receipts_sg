import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <Header />
        <BrowserRouter>
          <Route path="/" component={Landing} exact={true}></Route>
          <Route path="/surveys" component={Dashboard} exact={true}></Route>
          <Route path="/surveys/new" component={SurveyNew} />
        </BrowserRouter>
      </div>
    )
  }
};


export default connect(null, actions)(App);
