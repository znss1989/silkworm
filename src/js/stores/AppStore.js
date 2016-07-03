var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI.js');

var CHANGE_EVENT = 'change';

_plans = [
    {
        id: "4170fd4e-9ef2-3653-c827-97395e848e1e",
        title: "Set up a new plan",
        description: "The first step to use Silkworm is to set up a fresh new plan of your own."
    },
    {
        id: "c0ff2cbc-abc8-252f-9899-6a29760a7b45",
        title: "Travel around",
        description: "The world is big, why not take a trip around."
    },    
];

// Random long identity generator
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

var AppStore = assign({}, EventEmitter.prototype, {
    getAllPlans: function() {
        return _plans;
    },
    addNewPlan: function(payload) {
        console.log(payload);
        var id = guid();
        var title = payload.planTitle;
        var description = payload.planDescription;
        _plans.push({
            id: id,
            title: title,
            description: description
        });
        console.log(_plans);
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

module.exports = AppStore;