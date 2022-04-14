import React from "react";

function AddTaskToggle(props) {
  // toggles add task modal on or off.
  const { onClick } = props;
  
  return(<button onClick={onClick}> Add Task Modal.</button>)
}

export default AddTaskToggle;

// const StyledButton = styled.button{

// }
