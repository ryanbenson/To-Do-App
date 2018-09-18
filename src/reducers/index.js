import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tasks from './tasks';
import loading from './loading';

const rootReducer = combineReducers({ tasks, loading: loading, routing: routerReducer });

export default rootReducer;
