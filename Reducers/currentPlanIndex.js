import AppConstants from '../Actions/AppConstants'

const currentPlanIndex = (state='', action) => {
    switch (action.type) {
        case AppConstants.CREATE_PLAN:
        case AppConstants.SELECT_PLAN:
            return state = action.planID;
        default:
            return state;
    }
};

export default currentPlanIndex;