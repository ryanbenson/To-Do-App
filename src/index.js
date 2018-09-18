import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import store, { history } from './store';

import App from './components/App';
import List from './components/List';
import Single from './components/Single';

import registerServiceWorker from './registerServiceWorker';

// Import CSS
import './index.css';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={List}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
registerServiceWorker();
