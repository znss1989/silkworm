var React = require('react');

var PlanItem = require('./PlanItem.react');

var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Plans = React.createClass({
    render: function() {
        return (
            <div>
                <p>+</p>
            </div>
        );
    }
});

module.exports = Plans;