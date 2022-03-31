import React, { Component } from 'react';
import styled from "styled-components";


function HeaderTwo(props) {
  const content = props;
  return(
    <StyledHeader>
      <span>Tasks</span> List
    </StyledHeader>
  )
} 

export default HeaderTwo;

const StyledHeader = styled.div`
  & { 
    overflow: hidden;
    text-align: center;
    margin: 2em 0em;
    font-size: 1.5em;
  }
`
