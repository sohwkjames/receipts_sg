import React from "react";
import styled from "styled-components";
import {ADD_TASK_HINT} from '../../../constants/taskConstants'

function AddTaskField(props) {
  const { handleTextChange } = props;
  
  return (
      <StyledInput onChange={handleTextChange}  placeholder={ADD_TASK_HINT}/>
  )  
}

const StyledInput = styled.input`
  font-weight: bold;
`

export default AddTaskField;

