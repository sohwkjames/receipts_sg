import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import AddTaskModal from './TaskModal/AddTaskModal';
import AddTaskToggle from './TaskModal/AddTaskToggle';
import Task from '../Task/Task';

function TaskList(props) {
  const dispatch = useDispatch();
  const tasks = useSelector((selector) => selector.task);  
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleToggle() { setIsModalVisible(!isModalVisible)};

  const addTaskToggle = !isModalVisible && <AddTaskToggle onClick={handleToggle}/>
  const modal = isModalVisible && <AddTaskModal onClick={handleToggle}/>

  const content = tasks.map((task) => {
    return <Task text={task.text} isDone={false}/>
  })
  
  return (
    <div>
      {addTaskToggle}
      {modal}
      {content}
      </div>
  )
}

export default TaskList;
