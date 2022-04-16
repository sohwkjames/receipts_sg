import React, { useState } from 'react';
import { Card } from '../../UI/Card';
import { Button } from '../../UI/Button';
import { useDispatch } from 'react-redux';
import { useForm} from 'react-hook-form';
import { ADD_TASK_HINT } from '../../../constants/taskConstants';

import styled from 'styled-components';

function AddTaskModal(props) {
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, formState: { errors }} = useForm();

  function onSubmit(data) {
    const payload = { text: data.text, dueDate: null};
    dispatch({ type: 'task/taskAdded', payload });
  };

  return(
    <Card>
      <form onSubmit={handleSubmit(onSubmit)} >
        <StyledInput placeholder={ADD_TASK_HINT} {...register("text", { required: true})} />
        <Button>Submit!</Button>
      </form>
    </Card>
  )
}

export default AddTaskModal;

const StyledInput = styled.input`
  font-weight: bold;
`

const StyledP = styled.span`
  color: red;  
  margin: 16px;
`
