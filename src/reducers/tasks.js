function posts(state = [], action) {
  switch(action.type) {
    case 'ADD_TASK':
      console.log("ADDING A TASK");
      return state
    case 'EDIT_TASK':
      console.log("EDITING A TASK");
      return state;
    case 'REMOVE_TASK':
      console.log("REMOVING A TASK");
      return state;
    default:
      return state;
  }
  return state;
}

export default posts;
