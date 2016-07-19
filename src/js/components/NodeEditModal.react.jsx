var React = require('react');

var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var NodeEditModal = React.createClass({
    getInitialState: function() {
        return {
            item: this.props.item || '',
            note: this.props.note || '',
        };
    },
    _onItemChange: function(event) {
        this.setState({
            item: event.target.value
        });
    },
    _onNoteChange: function(event) {
        this.setState({
            note: event.target.value
        });
    },
    _onSave: function(event) {
        event.preventDefault(); // prevent reloading
        var payload = {
            nodeId: this.props.node_id,
            nodeItem: this.state.item,
            nodeNote: this.state.note
        };
        AppActions.updateNodeContent(payload);
        this.setState({
            isItemEditing: false,
        });
    },
    render: function() {
        return (
            <div className="node-span">
                <span className="node-datetime pull-xs-left">Time / Location</span>         

                <div className="modal fade" id={"node-edit-modal" + this.props.node_id} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <h4 className="modal-title" id="myModalLabel">Editing a node...</h4>
                            </div>
                            <div className="modal-body">

                                <form id={"node-edit" + this.props.node_id} method="post" onSubmit={this._onSave}>
                                    <div className="form-group">
                                        <label htmlFor="node-item-prompt">Node item</label>
                                        <input className="form-control" id="node-item-prompt" type="text" placeholder={this.state.item} value={this.state.item} onChange={this._onItemChange}  />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="node-note-prompt">Notes related</label>
                                        <textarea className="form-control" id="node-note-prompt" type="text" rows="5" placeholder={this.state.note} value={this.state.note} onChange={this._onNoteChange} ></textarea>
                                    </div>                  
                                </form>    
                                                                  
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-primary" type="submit" form={"node-edit" + this.props.node_id}>Save changes</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        );
    }
});

module.exports = NodeEditModal;