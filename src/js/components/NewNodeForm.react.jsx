var React = require('react');

var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var NewNodeForm = React.createClass({
    getInitialState: function() {
        return {
           item: '',
           note: ''
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
    createNewNode: function(event) {
        event.preventDefault(); // prevent reloading
        var payload = {
            nodeItem: this.state.item,
            nodeNote: this.state.note
        };
        this.props.onSave(payload);
        this.setState({
            item: '',
            note: ''
        });
    },
    render: function() {
        return (
            <div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#new-node-modal">
                    <i className="material-icons md-18 p-r-1">add_box</i>
                    Add a node
                </button>
                    
                <div className="modal fade" id="new-node-modal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            <h4 className="modal-title" id="myModalLabel">Adding a new node for this plan...</h4>
                            </div>
                            <div className="modal-body">
                                <form id="new-node" method="post" onSubmit={this.createNewNode}>
                                    <div className="form-group">
                                        <label htmlFor="node-item">Node item</label>
                                        <input className="form-control" id="node-item" type="text" placeholder="What's this node?" value={this.state.item} onChange={this._onItemChange}  />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="node-note">Note of detail</label>
                                        <textarea className="form-control" id="node-note" type="text" rows="5" placeholder="Put some note here? You can try Markdown (https://daringfireball.net/projects/markdown/syntax), to indicate sub steps for instance." value={this.state.note} onChange={this._onNoteChange}></textarea>
                                    </div>
                                </form>                       
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-info" type="submit" form="new-node">Save</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>                            
            </div>

 
        );
    }
});

module.exports = NewNodeForm;