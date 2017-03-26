import AppConstants from '../Actions/AppConstants'
import plan from './plan'

const plans = (state={}, action) => {
    switch (action.type) {
        case AppConstants.CREATE_PLAN:
            return Object.assign({}, state, {
                [action.planID]: plan(undefined, action)
            });
        case AppConstants.REMOVE_PLAN:
            delete state.[action.planID];
            return Object.assign({}, state);
        case AppConstants.EDIT_PLAN:
        case AppConstants.TOGGLE_PLAN:
        case AppConstants.SHARE_PLAN:
        case AppConstants.CREATE_NODE:
        case AppConstants.REMOVE_NODE:
        case AppConstants.SWAP_NODE:
        case AppConstants.EDIT_NODE:
        case AppConstants.TOGGLE_NODE:
            return Object.assign({}, state, {
                [action.planId]: plan(state.planID, action)
            });          
        default:
            return state;
    }
};

export default plans;