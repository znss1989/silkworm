var React = require('react');

var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var PlanItem = React.createClass({
    render: function() {
        return (
            <div>
                <p>This is a PlanItem.</p>
            </div>
        );
    }
});

module.exports = PlanItem;