import AppConstants from '../Actions/AppConstants'

const currentPlanIndex = (state=0, action) => {
    switch (action.type) {
        case AppConstants.SELECT_PLAN:
            return state = action.planID;
        default:
            return state;
    }
};

export default currentPlanIndex;