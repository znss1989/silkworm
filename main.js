import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import ActionCreators from './Actions/ActionCreators'
import rootReducer from './Reducers/rootReducer'
import App from './Components/App'

// state control
const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
);

// initiate
store.dispatch(ActionCreators.createPlan('Poke arounn Silkworm', 'This series will brief you on how to use the app of Silkworm planning.'));
store.dispatch(ActionCreators.createNode('Add a new plan.'));
store.dispatch(ActionCreators.createNode('Within the created plan, create new plan steps of your own.'));
store.dispatch(ActionCreators.createPlan('Delete this plan!', 'You can try deleting this plan.'));
store.dispatch(ActionCreators.createNode('This plan is messy!'));
store.dispatch(ActionCreators.createNode('Delete it!!'));
console.log(store.getState());

// view
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);