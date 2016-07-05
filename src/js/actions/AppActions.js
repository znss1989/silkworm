var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
    createPlan: function(payload) {
        var action = {
            actionType: AppConstants.APP_CREATE_PLAN,
            payload: payload
        };
        AppDispatcher.dispatch(action);
    },
    deletePlan: function(index) {
        console.log("deletePlan invoked with index:" + index);
        var action = {
            actionType: AppConstants.APP_DEL_PLAN,
            index: index
        };
        AppDispatcher.dispatch(action);
    },
};

module.exports = AppActions;