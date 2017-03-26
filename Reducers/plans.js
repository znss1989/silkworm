import AppConstants from '../Actions/AppConstants'
import plan from './plan'

const plans = (state=[], action) => {
    switch (action.type) {
        case AppConstants.CREATE_PLAN:
            return [
                ...state,
                plan(undefined, action)
            ];
        case AppConstants.REMOVE_PLAN:
            for (let i=0; i<state.length; ++i) {
                if (state[i].planID === action.planID) {
                    state.slice(i, 1);
                }
            }
            return state;
        case AppConstants.EDIT_PLAN:
        case AppConstants.TOGGLE_PLAN:
        case AppConstants.SHARE_PLAN:
        case AppConstants.CREATE_NODE:
        case AppConstants.REMOVE_NODE:
        case AppConstants.SWAP_NODE:
        case AppConstants.EDIT_NODE:
        case AppConstants.TOGGLE_NODE:
            return state.map((planState) => {
                plan(planState, action)
            });            
        default:
            return state;
    }
};

export default plans;