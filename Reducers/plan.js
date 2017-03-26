import AppConstants from '../Actions/AppConstants'
import nodes from './nodes'

const plan = (state={
    planID: '',
    title: '',
    brief: '',
    nodes: [],
    status: false, // not finished
    gist: ''
}, action) => {
    switch (action.type) {
        case AppConstants.CREATE_PLAN:
            return Object.assign({}, state, {
                planID: action.planID,
                title: action.title,
                brief: action.brief,
            });
        case AppConstants.EDIT_PLAN:
            return Object.assign({}, state, {
                title: action.title,
                brief: action.brief
            });
        case AppConstants.TOGGLE_PLAN:
            return Object.assign({}, state, {
                status: !state.status
            });
        case AppConstants.SHARE_PLAN:
            return state; // work on this later
        case AppConstants.CREATE_NODE:
        case AppConstants.REMOVE_NODE:
        case AppConstants.SWAP_NODE:
        case AppConstants.EDIT_NODE:
        case AppConstants.TOGGLE_NODE:
            return Object.assign({}, state, {
                nodes: nodes(state.nodes, action)
            });
        default:
            return state;
    }
};

export default plan;