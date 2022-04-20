import React from 'react';
import {Card} from '../UI/Card';
import { useDispatch } from 'react-redux';
import { taskToggled } from '../../actions/taskActions';
import styled from 'styled-components';

function Task(props) {
  const { dueDate, id, isDone, text } = props;
  const dispatch = useDispatch();
  
  function handleToggleTaskComplete() {
    dispatch(taskToggled(id));
  }

  return(
    <Card>
      <StyledDiv>
        <StyledTaskDetails>
          <label>
            <input defaultChecked={isDone} type="checkbox" onClick={handleToggleTaskComplete}/>
            <span>{text}</span>
          </label>
        </StyledTaskDetails>
        <StyledTaskIcon>
          <i className="material-icons">close</i>
        </StyledTaskIcon>
      </StyledDiv>
    </Card>
  )
}

export default Task;

const StyledDiv = styled.div`
  display: flex; 
`

const StyledTaskDetails = styled.div`
  width: 90%;
`

const StyledTaskIcon = styled.div`
  margin-top: 2px;
  margin: auto;
`