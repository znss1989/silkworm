var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI.js');

var CHANGE_EVENT = 'change';

var _plans = [];

// Initialize with some demo plans and/or nodes
_plans.push({
        id: "4170fd4e-9ef2-3653-c827-97395e848e1e",
        title: "Set up a new plan",
        description: "The first step to use Silkworm is to set up a fresh new plan of your own.",
        nodes: []
});
_plans.push({
        id: "c0ff2cbc-abc8-252f-9899-6a29760a7b45",
        title: "Travel around",
        description: "The world is big, why not take a trip around.",
        nodes: [
            {
                node_id: "7162b3b4-5662-9b04-09c0-786500b907b5",
                node_item: "Book a plane ticket to Paris",
                node_detail: {},
            },
            {
                node_id: "80e020a9-88c0-9e0d-6dbe-9832a23ee9e0",
                node_item: "Departure from airport Chengdu",
                node_detail: {}
            }
        ]
});

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
    getCurrentNodes: function() {
        var id = _plans.length - 1; // default fetch latest
        return _plans[id].nodes;
    },
    addNewPlan: function(payload) {
        var id = guid();
        var title = payload.planTitle;
        var description = payload.planDescription;
        _plans.push({
            id: id,
            title: title,
            description: description
        });
    },
    removePlan: function(index) {
        for (var i = 0; i < _plans.length; ++i) {
            if (_plans[i].id === index) {
                _plans.splice(i, 1);
                return ;
            }
        }
        
    },
    updatePlanText: function(payload) {
        var id = payload.planIndex;
        var title = payload.planTitle;
        var description = payload.planDescription;
        if (title === '') {
            console.log("Title cannot be empty!");
            return ;
        }
        _plans[id] = {
            id: id,
            title: title,
            description: description
        };
    },
    addNewNode: function(payload) {
        console.log("addNewNode invoked.");
        var id = guid();
        var item = payload.nodeItem;
        var currentNodes = this.getCurrentNodes();
        currentNodes.push({
            node_id: id,
            node_item: item,
            node_detail: {}
        });
        console.log(_plans[1]);
    },
    removeNode: function(index) {
        var currentNodes = this.getCurrentNodes();
        for (var i = 0; i < currentNodes.length; ++i) {
            if (currentNodes[i].node_id === index) {
                currentNodes.splice(i, 1);
                return ;
            }
        }
    },
    updateNodeText: function(payload) {
        var index = payload.nodeIndex;
        var item = payload.nodeItem;
        if (item === '') {
            console.log("Item cannot be empty!");
            return ;
        }
        var currentNodes = this.getCurrentNodes();
        for (var i = 0; i < currentNodes.length; ++i) {
            if (currentNodes[i].node_id === index) {
                currentNodes[i].node_item = item;
            }
        }
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