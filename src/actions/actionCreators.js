export function addTask(name) {
  return {
    type: 'ADD_TASK',
    name: name
  }
}

export function editTask(id, name) {
  return {
    type: 'EDIT_TASK',
    id: id,
    name: name
  }
}

export function removeTask(id) {
  return {
    type: 'REMOVE_TASK',
    id: id
  }
}
