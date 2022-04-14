import React, { useState } from 'react';
import {Card, RedCard} from '../../UI/Card';
import AddTaskField from './AddTaskField';
import { useDispatch } from 'react-redux';
import ModalFooter from './ModalFooter';

function AddTaskModal(props) {
  const dispatch = useDispatch()
  const [text, setText] = useState();
  const [dueDate, setDueDate] = useState();
  const [errors, setErrors] = useState({});

  function checkValidInput(text) {
    // if text is empty, set errors to { noEmpty: "must have some input"}
    if (!text) {
      setErrors({ noText: "There must be some text" });
      console.log('errors set');
    };
  }

  function handleTextChange(e){ 
    if(e.target.value)
    setText(e.target.value) 
  }

  function handleDueDateChange(e){ setDueDate(e.target.value) }

  function handleAddTask() {
    // update errors state
    checkValidInput(text);
    // dispatch action if no errors
    if (!Object.keys(errors)) {
      // dispatch a action of type task/addTask, payload is title
      const payload = { text: text, dueDate: dueDate }
      dispatch( {type: 'task/taskAdded', payload });
    }
  }

  return(
    <Card>
      <AddTaskField handleTextChange={handleTextChange}/>
      <ModalFooter>
          <button className="waves-effect waves-light btn-small" onClick={handleAddTask}>Save</button>      
      </ModalFooter>
    </Card>
  )
}

export default AddTaskModal;


