import React from 'react';
import {Card} from '../UI/Card';

function Task(props) {
  const { dueDate, isDone, text } = props;

  return(
    <Card>
      <div>
      <label>
        <input type="checkbox" />
        <span>{text}</span>

      </label>

      </div>
      
      {dueDate}
      {isDone}
    </Card>
  )
}

export default Task;
