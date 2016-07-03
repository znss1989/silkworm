var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI.js');

var CHANGE_EVENT = 'change';

_plans = [
    {
        id: 0,
        title: "Set up a new plan",
        description: "The first step to use Silkworm is to set up a fresh new plan of your own."
    },
    {
        id: 1,
        title: "Travel around",
        description: "The world is big, why not take a trip around."
    },    
];

var AppStore = assign({}, EventEmitter.prototype, {
    getAllPlans: function() {
        return _plans;
    },
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback) {
        this.on('change', callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }
});

AppDispatcher.register(function(payload) {
    var action = payload.action;
    switch(action.actionType) {

    };
    return true;
});

module.exports = AppStore;