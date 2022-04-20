// task related action creators can go here.

export function taskAdded(text, dueDate) {
  return {
    type: "task/taskAdded",
    payload: { text, dueDate }
  }
}

export function taskToggled(taskId) {
  return {
    type: "task/taskDoneToggled",
    payload: taskId
  }
};
