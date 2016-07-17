var React = require('react');
var classNames = require('classnames');

var NodeEditModal = require('./NodeEditModal.react.jsx');

var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Node = React.createClass({
    _onClickRemove: function(event) {
        AppActions.deleteNode(this.props.index);
    },
    render: function() {
        var item = this.props.item;
        var detail = this.props.detail;
        
        return (
            <div className="timeline-node">
                <div className="timeline-token"></div>
                <div className="timeline-node-content">
                    <h4>{item}</h4>

                    <NodeEditModal node_id={this.props.node_id} item={this.props.item} note={this.props.detail.note} />

                    <p className="p-t-1">{detail.note}</p>
                    <div onClick={this._onClickRemove}>-</div>
                </div>
            </div>
        );
    }
});

module.exports = Node;