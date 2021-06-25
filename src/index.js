import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'

import App from './components/App';
import AllReducers from '../src/store/index'

const store = createStore(AllReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)