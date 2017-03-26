import AppConstants from '../Actions/AppConstants'
import node from './node'

const nodes = (state=[], action) => {
    switch (action.type) {
        case AppConstants.CREATE_NODE:
            return [
                ...state, 
                node(undefined, action)
            ];
        case AppConstants.REMOVE_NODE:
            for (let i=0; i<state.length; ++i) {
                if (state[i].nodeID === action.nodeID) {
                    state.splice(i, 1);
                }
            }
            return state;
        case AppConstants.SWAP_NODE:
            let sourceIndex, targetIndex;
            for (let i=0; i<state.length; ++i) {
                if (state[i].nodeID === action.sourceNodeID) {
                    sourceIndex = i;
                }
                if (state[i].nodeID === action.targetNodeID) {
                    targetIndex = i;
                }
            }
            [state[sourceIndex], state[targetIndex]] = [state[targetIndex], state[sourceIndex]]; // swap with destructuring
            return state;
        case AppConstants.EDIT_NODE:
            return state.map((nodeState) => {
                node(nodeState, action);
            });
        case AppConstants.TOGGLE_NODE:
            return state.map((nodeState) => {
                node(nodeState, action);
            });
        default:
            return state;
    }
};

export default nodes;