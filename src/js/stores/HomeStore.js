var HomeDispatcher = require('../dispatcher/HomeDispatcher');
var AppConstants = require('../constants/HomeConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI.js');

var CHANGE_EVENT = 'change';

_items = [];

var HomeStore = assign({}, EventEmitter.prototype, {
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

HomeDispatcher.register(function(payload) {
    var action = payload.action;
    switch(action.actionType) {

    };
    return true;
});

module.exports = HomeStore;