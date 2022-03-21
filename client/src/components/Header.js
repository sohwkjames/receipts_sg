import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom';
import Payments from './Payments';

function Header(props) {

  function renderContent() {
    switch(props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login with Google</a></li>
      default:
        return [
        <li key="1"><Payments /></li>,
        <li key="3" style={{margin: '0 10px'}}>Credits: {props.auth.credits}</li>,
        <li key="2"><a href="api/logout">Logout</a></li>
      ];
    };
  };

    return (
    <nav>
      <div className="nav-wrapper">
        <BrowserRouter>
          <Link to={props.auth ? "/" : "/"} className="left brand-logo">receipts.sg</Link>
        </BrowserRouter>
        <ul className="right">
          {renderContent()}
        </ul>
      </div>
    </nav>
    );
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
