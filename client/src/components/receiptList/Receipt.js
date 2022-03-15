import React from 'react';
import styled from 'styled-components';
import Card from '../UI/Card';

function Receipt(props) {
  const { title, text } = props;

  return (
    <Card>
      <Title>{title}</Title>
      <div>{text}</div>
    </Card>
  )
}

export default Receipt;

const Title = styled.div`
  font-size: 18px;
`


