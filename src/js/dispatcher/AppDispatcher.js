var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var AppStore = require('../stores/AppStore');
var AppConstants = require('../constants/AppConstants');

var AppDispatcher = assign(new Dispatcher(), {
    handleViewAction: function(action) {
        var payload = {
            source: 'VIEW_ACTION',
            action: action
        };
        this.dispatch(payload);
    }
});

AppDispatcher.register(function(action) {
    switch(action.actionType) {
        // Respond to APP_CREATE_PLAN action
        case AppConstants.APP_CREATE_PLAN:
            AppStore.addNewPlan(action.payload);
            break;
        // Respond to APP_DEL_PLAN action
        case AppConstants.APP_DEL_PLAN:
            AppStore.removePlan(action.id);
            break;
        // Respond to APP_UPDATE_PLAN_TEXT action
        case AppConstants.APP_UPDATE_PLAN_TEXT:
            AppStore.updatePlanText(action.payload);
            break;
        // Respond to APP_SELECT_PLAN action
        case AppConstants.APP_SELECT_PLAN:
            AppStore.changeSelectIndex(action.id);
            break;
        // Respond to APP_CREATE_NODE action
        case AppConstants.APP_CREATE_NODE:
            AppStore.addNewNode(action.payload);
            break;
        // Respond to APP_DEL_NODE action
        case AppConstants.APP_DEL_NODE:
            AppStore.removeNode(action.index);
            break;
        // Respond to APP_UPDATE_NODE_TEXT action
        case AppConstants.APP_UPDATE_NODE_CONTENT:
            AppStore.updateNodeContent(action.payload);
            break;
        
        // Respond to ...
        default:
            return true;
    }
    AppStore.emitChange();
});

module.exports = AppDispatcher;