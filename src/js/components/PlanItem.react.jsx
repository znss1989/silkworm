var React = require('react');

var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var PlanItem = React.createClass({
    render: function() {
        return (
            <div>
                <h4>{this.props.title}</h4>
                <p>{this.props.description}</p>
            </div>
        );
    }
});

module.exports = PlanItem;