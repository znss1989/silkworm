var React = require('react');
var classNames = require('classnames');

var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Node = React.createClass({
    getInitialState: function() {
        return {
            isItemEditing: false,
            item: this.props.item || '',
            note: this.props.detail.note,
        };
    },
    _onItemDoubleClick: function() {
        this.setState({isItemEditing: true});
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
    _onClickRemove: function(event) {
        AppActions.deleteNode(this.props.index);
    },
    render: function() {
        var item = this.props.item;
        var detail = this.props.detail;

        // Show prompt and hide orignal content when editing
        var itemPrompt = (this.state.isItemEditing) ? (
            <div className="itemPrompt">
                <label htmlFor="node-item-prompt">Node item</label>
                <input id="node-item-prompt" type="text" placeholder={this.state.item} value={this.state.item} onChange={this._onItemChange} onBlur={this._onSave} />
            </div>
        ) : null;
        
        return (
            <div className="timeline-node">
                <div className="timeline-token"></div>
                <div className="timeline-node-content">
                    <h4 className={classNames({'editing': this.state.isItemEditing})} onDoubleClick={this._onItemDoubleClick}>{item}</h4>
                    {itemPrompt}
                    <div className="node-span">
                        <span className="node-datetime">Time / Location</span>

                        <span className="label label-primary col-xs-2 pull-xs-right" data-toggle="modal" data-target="#node-edit-modal">
                            Edit
                        </span>

                        <div className="modal fade" id="node-edit-modal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        <h4 className="modal-title" id="myModalLabel">Editing a node...</h4>
                                    </div>
                                    <div className="modal-body">

                                        <form id="node-edit" method="post" onSubmit={this._onSave}>
                                            <div className="form-group">
                                                <label htmlFor="node-item-prompt">Node item</label>
                                                <input className="form-control" id="node-item-prompt" type="text" placeholder={this.state.item} value={this.state.item} onChange={this._onItemChange}  />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="node-note-prompt">Notes related</label>
                                                <textarea className="form-control" id="node-note-prompt" type="text" placeholder={this.state.note} value={this.state.note} onChange={this._onNoteChange} ></textarea>
                                            </div>                  
                                        </form>    
                                                                          
                                    </div>
                                    <div className="modal-footer">
                                        <button className="btn btn-primary" type="submit" form="node-edit">Save changes</button>
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p>{detail.note}</p>
                    <div onClick={this._onClickRemove}>-</div>
                </div>
            </div>
        );
    }
});

module.exports = Node;