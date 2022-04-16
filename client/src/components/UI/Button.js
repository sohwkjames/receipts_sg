import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
  background-color: rgba(100, 100, 100, 0.8);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px;
  &:hover {
    background-color:rgba(100, 100, 100, 1);
    transition: 0.2s;
  }

`

export { Button };
