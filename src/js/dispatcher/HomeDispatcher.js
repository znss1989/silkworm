var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var HomeDispatcher = assign(new Dispatcher(), {
    handleViewAction: function(action) {
        var payload = {
            source: 'VIEW_ACTION',
            action: action
        };
        this.dispatch(payload);
    }
});

module.exports = HomeDispatcher;