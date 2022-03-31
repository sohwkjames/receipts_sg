import React from 'react';
import styled from 'styled-components';
import Card
 from '../UI/Card';
function Task(props) {
  const { dueDate, isDone, text } = props;

  return(
    <Card>
      <h4>{text}</h4>
      {dueDate}
      {isDone}
    </Card>
    
  )
}

