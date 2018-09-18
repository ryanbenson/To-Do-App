function loading(state = {}, action) {
  switch(action.type) {
    case 'START_LOADING':
      state = action.loading;
      return state;
    case 'END_LOADING':
      state = action.loading;
      return state;
    default:
      return state;
  }
  return state;
}

export default loading;
