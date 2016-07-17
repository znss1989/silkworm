var React = require('react');

var NewNodeForm = require('./NewNodeForm.react.jsx');
var Node = require('./Node.react.jsx');

var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Nodes = React.createClass({
    getDefaultProps: function() {
        return {
          nodes: []
        };
    },
    _onSave: function(payload) {
        if (payload.nodeItem) {
            AppActions.createNode(payload);
        }
    },
    render: function() {
        var nodes = this.props.nodes;
        var nodesHtml = nodes.map(function(node) {
            return (
                <Node key={node.node_id} node_id={node.node_id} item={node.node_item} detail={node.node_detail} />
            );
        });
        return (
            <div className="m-t-3" id="nodes-list">
                <h3 className="display-5 text-info text-xs-center m-y-1">Current Plan Infomation</h3>
                <hr className="hr-divider" />
                <div className="nodes-container">
                    <NewNodeForm onSave={this._onSave} />
                    {nodesHtml}
                </div>
            </div>
        );
    }
});

module.exports = Nodes;