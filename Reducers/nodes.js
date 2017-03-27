import AppConstants from '../Actions/AppConstants'
import node from './node'

const nodes = (state=[], action) => {
    switch (action.type) {
        case AppConstants.CREATE_NODE:
            return [
                ...state, 
                node(undefined, action)
            ]; // notice that this also return a new array instance
        case AppConstants.REMOVE_NODE:
            for (let i=0; i<state.length; ++i) {
                if (state[i].nodeID === action.nodeID) {
                    state.splice(i, 1);
                }
            }
            return state.concat(); // return a new array instance to update
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
            console.log("In reducer nodes, before toggle-node, state: ");
            console.log(state);
            let result = state.map((nodeState, index) => {
                return node(nodeState, action);
            });
            console.log("In reducer nodes, after toggle-node, state: ");
            console.log(result);
            return result;
        default:
            return state;
    }
};

export default nodes;