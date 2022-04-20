import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import AddTaskForm from './TaskForm/AddTaskForm';
import AddTaskToggle from './TaskForm/AddTaskToggle';
import Task from '../Task/Task';

function TaskList(props) {
  const dispatch = useDispatch();
  const tasks = useSelector((selector) => selector.task);  
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleToggleVisibility() { setIsModalVisible(!isModalVisible)};

  const addTaskForm = <AddTaskForm onClick={handleToggleVisibility}/>
  
  console.log('taskList: tasks are:', tasks);

  const content = tasks.map((task) => {
    return <Task key={task.id} id={task.id} text={task.text} isDone={false}/>
  })
  
  return (
    <div>
      {addTaskForm}
      {content}
      </div>
  )
}

export default TaskList;
