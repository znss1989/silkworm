var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI.js');

var CHANGE_EVENT = 'change';

var _plans = [];

// Initialize with some demo plans and/or nodes
_plans.push({
        plan_id: "4170fd4e-9ef2-3653-c827-97395e848e1e",
        title: "Set up a new plan",
        description: "The first step to use Silkworm is to set up a fresh new plan of your own.",
        nodes: []
});
_plans.push({
        plan_id: "c0ff2cbc-abc8-252f-9899-6a29760a7b45",
        title: "Travel around Paris",
        description: "The world is big, why not take a trip around.",
        nodes: [
            {
                node_id: "7162b3b4-5662-9b04-09c0-786500b907b5",
                node_item: "Book a flight from Chengdu to Paris",
                node_detail: {
                    note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate."
                }
            },
            {
                node_id: "80e020a9-88c0-9e0d-6dbe-9832a23ee9e0",
                node_item: "Departure from airport CTU, Chengdu, land at airport CDG, Paris",
                node_detail: {
                    note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate."
                }
            },
            {
                node_id: "6fa89feb-b650-429c-454e-73dbc836ebef",
                node_item: "Board a train at station Gare de Lyon to Versailles",
                node_detail: {
                    note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate."
                }
            },
            {
                node_id: "4a08c85f-47a1-44d5-d4cb-736ff0b23744",
                node_item: "Vist Hall of Mirrors & buy some postcards",
                node_detail: {
                    note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate."
                }
            },
            {
                node_id: "116e7986-6744-52a9-e54b-b6d12fe3fad1",
                node_item: "Take train back town, and subway to Louvre Museum",
                node_detail: {
                    note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate."
                }
            },
            {
                node_id: "f0f0f3f2-8694-cafc-e9af-cb87909b5ad3",
                node_item: "Get back to hotel",
                node_detail: {
                    note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate."
                }
            }
        ]
});

var _selectIndex = _plans.length - 1;

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
    getSelectIndex: function() {
        return _selectIndex;
    },
    getCurrentNodes: function() {
        var selectIndex = _selectIndex;
        return _plans[selectIndex].nodes;
    },
    addNewPlan: function(payload) {
        var plan_id = guid();
        var title = payload.planTitle;
        var description = payload.planDescription;
        _plans.push({
            plan_id: plan_id,
            title: title,
            description: description,
            nodes: []
        });
        $('#new-plan-modal').modal('hide');
    },
    removePlan: function(id) {
        var selectIndex = _selectIndex;
        for (var i = 0; i < _plans.length; ++i) {
            if (_plans[i].plan_id === id) {
                _plans.splice(i, 1);

                // Update _selectIndex
                if (selectIndex === i) {
                    selectIndex = _plans.length - 1;
                }
                if (selectIndex > i) {
                    selectIndex -= 1;
                }
                _selectIndex = selectIndex;
                return ;
            }
        }
    },
    updatePlanText: function(payload) {
        var id = payload.planId;
        var index;
        for (var i = 0; i < _plans.length; ++i) {
            if (_plans[i].plan_id === id) {
                index = i;
            }
        }
        var title = payload.planTitle;
        var description = payload.planDescription;
        if (title === '') {
            console.log("Title cannot be empty!");
            return ;
        }
        _plans[index].title = title;
        _plans[index].description = description;
        $("#plan-edit-modal" + id).modal('hide');
    },
    changeSelectIndex: function(id) {
        var selectIndex = _selectIndex;
        for (var i = 0; i < _plans.length; ++i) {
            if (_plans[i].plan_id === id) {
                selectIndex = i;
                _selectIndex = selectIndex;
                return ;
            }
        }
    },
    addNewNode: function(payload) {
        var id = guid();
        var item = payload.nodeItem;
        var currentNodes = this.getCurrentNodes();
        currentNodes.push({
            node_id: id,
            node_item: item,
            node_detail: {}
        });
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
    updateNodeContent: function(payload) {
        var id = payload.nodeId;
        var item = payload.nodeItem;
        var note = payload.nodeNote;
        if (item === '') {
            console.log("Item cannot be empty!");
            return ;
        }
        var currentNodes = this.getCurrentNodes();
        for (var i = 0; i < currentNodes.length; ++i) {
            if (currentNodes[i].node_id === id) {
                currentNodes[i].node_item = item;
                currentNodes[i].node_detail.note = note;
            }
        }
        $("#node-edit-modal").modal('hide');
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