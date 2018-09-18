import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest("GET_TASKS", workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchTasks() {
  return axios({
    method: "get",
    url: "http://localhost:4567/api/tasks"
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const response = yield call(fetchTasks);
    const tasks = response.data;

    // dispatch a success action to the store with the new tasks
    yield put({ type: "GET_TASKS_SUCCESS", tasks });

  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "GET_TASKS_FAILURE", error });
  }
}
