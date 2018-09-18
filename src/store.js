import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import createSagaMiddleware from "redux-saga";

import rootReducer from './reducers/index';
import { watcherSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const defaultState = {
  tasks: []
};

const enhancers = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

// run the saga
sagaMiddleware.run(watcherSaga);

export const history = syncHistoryWithStore(browserHistory, store);

// allow hot reloading of reducers
if(module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
