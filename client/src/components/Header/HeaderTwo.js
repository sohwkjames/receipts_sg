import React, { Component } from 'react';
import './HeaderTwo.css';

function HeaderTwo(props) {
  return(
    <nav>
    <div class="nav-wrapper">
      <a href="/" class="brand-logo left"><i class="material-icons">home</i></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
      </ul>
    </div>
  </nav>
  )
} 

export default HeaderTwo;

