import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import App from './components/App';
import AllReducers from '../src/store/index'

// const store = createStore(AllReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(AllReducers, composeWithDevTools(applyMiddleware(thunk)));


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)