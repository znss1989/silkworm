import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import AppConstants from './Actions/AppConstants'
import rootReducer from './Reducers/rootReducer'
import App from './Containers/App'

// state control
const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
);

store.dispatch(AppConstants.CREATE_PLAN('Poke arounn Silkworm', 'This series will brief you on how to use the app of Silkworm planning.'));

// view
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);