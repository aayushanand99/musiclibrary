import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import './index.css';
import Main from './components/Main';
import registerServiceWorker from './registerServiceWorker';
import combineReducers from './reducers'
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(combineReducers, applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}>
    <Main />
</Provider>, document.getElementById('root'));
registerServiceWorker();

