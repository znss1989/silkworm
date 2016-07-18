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
    removePlan: function(id) {
        var action = {
            actionType: AppConstants.APP_DEL_PLAN,
            id: id
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
    selectCurrentPlan: function(id) {
        var action = {
            actionType: AppConstants.APP_SELECT_PLAN,
            id: id
        };
        AppDispatcher.dispatch(action);
    },
    createNode: function(payload) {
        var action = {
            actionType: AppConstants.APP_CREATE_NODE,
            payload: payload
        };
        AppDispatcher.dispatch(action);
    },
    removeNode: function(id) {
        console.log("removeNode invoked at action.");
        var action = {
            actionType: AppConstants.APP_DEL_NODE,
            id:id
        };
        AppDispatcher.dispatch(action);
    },
    updateNodeContent: function(payload) {
        var action = {
            actionType: AppConstants.APP_UPDATE_NODE_CONTENT,
            payload: payload
        };
        AppDispatcher.dispatch(action);
    }
};

module.exports = AppActions;