// const sampleTask = { id: 0, text: 'This is sample task'};

const initialState = [];

function nextTaskId(tasks) {
  // returns 0 if tasks array is empty
  const maxId = tasks.reduce((maxId, task) => Math.max(task.id, maxId), -1)
  return maxId + 1
}

export default function(state = initialState, action) {
  switch(action.type) {
    case 'task/taskAdded': {

      return [...state, {
        id: nextTaskId(state),
        text: action.payload.text,
        completed: false
      }]
    }

    case 'task/taskDoneToggled': {
      const result = state.map((task) => {
        if (action.payload === task.id) {
          return {
            ...task,
            completed: !task.completed
          }
        } else return task 
      });
      
      return result;
    }

    case 'task/taskDeleted': {
      const result = state.filter(task => task.id !== action.payload);
      return result;
    }

    default:
      return state;
  }
};

