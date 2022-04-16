const sampleTask = { id: 0, text: 'This is sample task', dueDate: 0};

const initialState = [sampleTask];

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
        dueDate: action.payload.dueDate,
        completed: false
      }]
    }
    default:
      return state;
  }
};

