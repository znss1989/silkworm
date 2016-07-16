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
    deletePlan: function(id) {
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
    deleteNode: function(index) {
        var action = {
            actionType: AppConstants.APP_DEL_NODE,
            index:index
        };
        AppDispatcher.dispatch(action);
    },
    updateNodeText: function(payload) {
        var action = {
            actionType: AppConstants.APP_UPDATE_NODE_TEXT,
            payload: payload
        };
        AppDispatcher.dispatch(action);
    }
};

module.exports = AppActions;