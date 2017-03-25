import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './Reducers/rootReducer'
import App from './Containers/App'

// state control
const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
);

// view
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);