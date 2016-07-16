var React = require('react');

var Plans = require('./Plans.react.jsx');
var Nodes = require('./Nodes.react.jsx');

var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var AppBody = React.createClass({
    render: function() {
        return (
            <div className="app-body container p-t-3 p-b-3">
                <div className="row">
                    <div className="col-md-4">
                        <Plans plans={this.props.plans} />
                    </div>
                    <div className="col-md-8">
                        <Nodes nodes={this.props.nodes} />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = AppBody;