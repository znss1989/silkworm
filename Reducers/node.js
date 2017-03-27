import AppConstants from '../Actions/AppConstants'

const node = (state={
    nodeID: '',
    content: '',
    status: false // not finished
}, action) => {
    switch (action.type) {
        case AppConstants.CREATE_NODE:
            return {
                nodeID: action.nodeID,
                content: action.content,
                status: false
            };
        case AppConstants.EDIT_NODE:
            if (state.nodeID !== action.nodeID) {
                return state;
            }
            return Object.assign({}, state, {
                content: action.content
            });
        case AppConstants.TOGGLE_NODE:
            if (state.nodeID !== action.nodeID) {
                console.log("node remains...");
                return state;
            }
            console.log("node status changes...");
            let result = Object.assign({}, state, {
                status: !state.status
            });
            console.log(result);
            return result;
        default:
            return state;
    }
};

export default node;