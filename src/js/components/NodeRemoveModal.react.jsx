var React = require('react');

var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var NodeRemoveModal = React.createClass({
    _onRemove: function(event) {
        console.log("_onRemove invoked.");
        AppActions.removeNode(this.props.node_id);
    },
    render: function() {
        return (
            <div>
                <div className="modal fade" id={"node-remove-modal" + this.props.node_id} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <h4 className="modal-title" id="myModalLabel">Are you sure to remove this node?</h4>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-warning" type="button" onClick={this._onRemove}>Remove</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }    
});

module.exports = NodeRemoveModal;