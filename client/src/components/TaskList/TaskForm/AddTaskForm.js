import React from 'react';
import { taskAdded, taskToggled } from '../../../actions/taskActions';
import { Card } from '../../UI/Card';
import { Button } from '../../UI/Button';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { ADD_TASK_HINT } from '../../../constants/taskConstants';

import styled from 'styled-components';

function AddTaskForm(props) {
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, formState: { errors }} = useForm();

  function onSubmit(data) {
    dispatch(taskAdded(data.text, null));
  };

  return(
    <Card>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)} >
        <StyledInput autoComplete="off" placeholder={ADD_TASK_HINT} {...register("text", { required: true})} />

        <Button>Submit!</Button>
      </form>
    </Card>
  )
}

export default AddTaskForm;

const StyledInput = styled.input`
  font-weight: bold;
`

const StyledP = styled.span`
  color: red;  
  margin: 16px;
`
