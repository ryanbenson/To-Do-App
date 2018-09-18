function posts(state = [], action) {
  switch(action.type) {
    case 'GET_TASKS':
      return state;
    case 'GET_TASKS_SUCCESS':
      return state.tasks = action.tasks;
    case 'GET_TASKS_FAILURE':
      return state;
    case 'GET_TASK':
      return state;
    case 'ADD_TASK':
      return state;
    case 'ADD_TASK_SUCESS':
      return [...state, {name: action.data.name, id: action.data.id}];
    case 'EDIT_TASK':
      return state;
    case 'REMOVE_TASK':
      return state;
    case 'REMOVE_TASK_SUCESS':
      state = state.filter((t) => t.id !== action.id);
      return state;
    default:
      return state;
  }
  return state;
}

export default posts;
