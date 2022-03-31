import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';

function TaskList(props) {

  const tasks = useSelector((selector) => selector.task);
  console.log('tasks in taskList:', tasks);

  return (
    <div>Task List.</div>
  )
}

export default TaskList;
