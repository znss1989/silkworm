import AppConstants from '../Actions/AppConstants'
import plan from './plan'

const plans = (state={
    currentPlanID: ''
}, action) => {
    switch (action.type) {
        case AppConstants.CREATE_PLAN:
            return Object.assign({}, state, {
                currentPlanID: action.planID,
                [action.planID]: plan(undefined, action)
            });
        case AppConstants.REMOVE_PLAN:
            delete state[action.planID];
            if (state.currentPlanID === action.planID) {
                state.currentPlanID = '';
            }
            return Object.assign({}, state);
        case AppConstants.SELECT_PLAN:
            return Object.assign({}, state, {
                currentPlanID: action.planID
            });
        case AppConstants.EDIT_PLAN:
        case AppConstants.TOGGLE_PLAN:
        case AppConstants.SHARE_PLAN:
            // console.log("In reducer plans:");
            // console.log(state);
            // console.log(action);
            // console.log(state[action.planID]);
            return Object.assign({}, state, {
                [action.planId]: plan(state[action.planID], action)
            });  
        case AppConstants.CREATE_NODE:
        case AppConstants.REMOVE_NODE:
        case AppConstants.SWAP_NODE:
        case AppConstants.EDIT_NODE:
        case AppConstants.TOGGLE_NODE:
            return Object.assign({}, state, {
                [state.currentPlanID]: plan(state[state.currentPlanID], action)
            });      
        default:
            return state;
    }
};

export default plans;