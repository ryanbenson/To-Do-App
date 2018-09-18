import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest("GET_TASKS", workerSaga);
  yield takeLatest("REMOVE_TASK", workerRemoveTask);
  yield takeLatest("ADD_TASK", workerAddTask);
}

// function that makes the api request and returns a Promise for response
function fetchTasks() {
  return axios({
    method: "get",
    url: "https://pacific-gorge-44009.herokuapp.com/api/tasks"
  });
}

function removeTask(id) {
  let bodyFormData = new FormData();
  bodyFormData.set('id', id);
  return axios({
    method: "delete",
    url: "https://pacific-gorge-44009.herokuapp.com/api/tasks",
    data: bodyFormData,
    config: { headers: {'Content-Type': 'multipart/form-data' }}
  })
}

function addTask(name) {
  let bodyFormData = new FormData();
  bodyFormData.set('name', name);
  return axios({
    method: "post",
    url: "https://pacific-gorge-44009.herokuapp.com/api/tasks",
    data: bodyFormData,
    config: { headers: {'Content-Type': 'multipart/form-data' }}
  })
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  let loading = true;
  yield put({ type: "START_LOADING", loading });

  try {
    const response = yield call(fetchTasks);
    const tasks = response.data;

    // dispatch a success action to the store with the new tasks
    yield put({ type: "GET_TASKS_SUCCESS", tasks });

  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "GET_TASKS_FAILURE", error });
  }

  loading = false;
  yield put({ type: "START_LOADING", loading });
}

function* workerRemoveTask(action) {
  let loading = true;
  yield put({ type: "START_LOADING", loading });

  try {
    const response = yield call(removeTask, action.id);
    const id = action.id;
    yield put({ type: 'REMOVE_TASK_SUCESS', id});
  } catch(error) {
    yield put({ type: 'REMOVE_TASK_ERROR', error});
  }

  loading = false;
  yield put({ type: "START_LOADING", loading });
}

function* workerAddTask(action) {
  let loading = true;
  yield put({ type: "START_LOADING", loading });
  try {
    const response = yield call(addTask, action.name);
    // yield put({ type: 'ADD_TASK_SUCESS'}, {name: action.name, id: response.data.id});
    const data = {name: action.name, id: response.data.id};
    yield put({ type: 'ADD_TASK_SUCESS', data});
  } catch(error) {
    yield put({ type: 'ADD_TASK_ERROR'}, error);
  }

  loading = false;
  yield put({ type: "START_LOADING", loading });
}
