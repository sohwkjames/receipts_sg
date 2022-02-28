import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ReceiptNew from './receipts/ReceiptNew';

const Dashboard = () => <h2>Dashboard</h2>

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
          <Route path="/receipts/new" component={ReceiptNew} />
        </BrowserRouter>
        <ReceiptNew />
      </div>
    )
  }
};


export default connect(null, actions)(App);
