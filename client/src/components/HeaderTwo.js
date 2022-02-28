import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom';
import Payments from './Payments';

function HeaderTwo(props) {
  const content = props;
  return(
    <div>
      This is props we receive:;
    </div>
  )
} 

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(HeaderTwo);
