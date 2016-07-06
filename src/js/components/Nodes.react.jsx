var React = require('react');

var NewNodeForm = require('./NewNodeForm.react.jsx');
var Node = require('./Node.react.jsx');

var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Nodes = React.createClass({
    _onSave: function(payload) {
        if (payload.nodeItem) {
            AppActions.createNode(payload);
        }
    },
    render: function() {
        var nodes = this.props.nodes;
        console.log(nodes);
        var nodesHtml = nodes.map(function(node) {
            return (
                <Node key={node.node_id} index={node.node_id} item={node.node_item} detail={node.node_detail} />
            );
        });
        return (
            <div id="nodes-list">
                <NewNodeForm onSave={this._onSave} />
                {nodesHtml}
            </div>
        );
    }
});

module.exports = Nodes;