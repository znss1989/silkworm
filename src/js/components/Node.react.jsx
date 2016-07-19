var React = require('react');
var classNames = require('classnames');
var Remarkable = require('remarkable');

var NodeEditModal = require('./NodeEditModal.react.jsx');
var NodeRemoveModal = require('./NodeRemoveModal.react.jsx');

var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Node = React.createClass({
    getInitialState: function() {
        return {
            finish: this.props.detail.finish,
        }
    },
    _onCheck: function(event) {
        console.log("_onCheck invoked.");
        var finish = event.target.checked;
        console.log(finish);
        this.setState({
            finish: finish
        }, () => {
            console.log(this.state.finish);
        });
        var payload = {
            nodeId: this.props.node_id,
            nodeFinish: this.state.finish
        };
        AppActions.updateNodeStatus(payload);
    },
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
                        <h4>{item}</h4>
 
                        <i className="material-icons md-18 warning-orange pull-xs-right" data-toggle="modal" data-target={"#node-remove-modal" + this.props.node_id}>delete_forever</i>
                        <span className="label label-primary col-xs-2 pull-xs-right m-r-1" data-toggle="modal" data-target={"#node-edit-modal" + this.props.node_id}>
                            Edit
                        </span> 
                        <label className="pull-xs-right m-r-1">    
                            <input type="checkbox" id={"checkbox" + this.props.node_id} checked={this.props.detail.finish} onChange={this._onCheck} /> 
                            {this.state.finish ? "Finished" : "Not done"}
                        </label>               
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