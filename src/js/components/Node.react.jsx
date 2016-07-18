var React = require('react');
var classNames = require('classnames');
var Remarkable = require('remarkable');

var NodeEditModal = require('./NodeEditModal.react.jsx');
var NodeRemoveModal = require('./NodeRemoveModal.react.jsx');

var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Node = React.createClass({
    rawMarkup: function() {
        var md = new Remarkable();
        var rawMarkup = md.render(this.props.detail.note.toString());
        return { __html: rawMarkup }; // This is a dangerous backdoor, pls cover it at backend.
    },
    render: function() {
        var item = this.props.item;
        var detail = this.props.detail;
        
        return (
            <div className="timeline-node">
                <div className="timeline-token"></div>
                <div className="timeline-node-content">
                    <div>
                        <h4>
                            {item}
                            <i className="material-icons md-18 warning-orange pull-xs-right" data-toggle="modal" data-target={"#node-remove-modal" + this.props.node_id}>delete_forever</i>
                        </h4>

                        <NodeRemoveModal node_id={this.props.node_id} />
                    </div>
                    
                    <NodeEditModal node_id={this.props.node_id} item={this.props.item} note={this.props.detail.note} />

                    <div className="markdown m-t-2 p-l-1" dangerouslySetInnerHTML={this.rawMarkup()}></div>
                </div>
            </div>
        );
    }
});

module.exports = Node;

// <div >{md.render(detail.note.toString())}</div>