var React = require('react');

var Plans = require('./Plans.react.jsx');
var Nodes = require('./Nodes.react.jsx');

var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var AppBody = React.createClass({
    render: function() {
        return (
            <div>
                <Plans plans={this.props.plans} />
                <Nodes nodes={this.props.nodes} />
            </div>
        );
    }
});

module.exports = AppBody;