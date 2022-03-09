import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';
// todo: make this a functional component instead 
class Payments extends Component {
  render() {

    const name = 'Receipts-sg';
    const description = '$5 for 5 premium complaints';

    // token takes a callback function, for handling the token that 
    // Stripe sends back after user enters credit card detail
    return (
      <StripeCheckout
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        name={name}
        description={description}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
  
};

export default connect(null, actions)(Payments);
