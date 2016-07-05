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
        var action = {
            actionType: AppConstants.APP_DEL_PLAN,
            index: index
        };
        AppDispatcher.dispatch(action);
    },
    updatePlanText: function(payload) {
        var action = {
            actionType: AppConstants.APP_UPDATE_PLAN_TEXT,
            payload: payload
        };
        AppDispatcher.dispatch(action);
    },
};

module.exports = AppActions;