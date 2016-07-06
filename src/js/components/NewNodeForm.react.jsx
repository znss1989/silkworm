var React = require('react');

var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var NewNodeForm = React.createClass({
    getInitialState: function() {
        return {
           item: this.props.item || '',
        };
    },
    _onItemChange: function(event) {
        this.setState({
            item: event.target.value
        });
    },
    createNewNode: function(event) {
        event.preventDefault(); // prevent reloading
        var payload = {
            nodeItem: this.state.item,
        };
        this.props.onSave(payload);
        this.setState({
            item: '',
        });
    },
    render: function() {
        return (
            <form id="new-node" method="post" onSubmit={this.createNewNode}>
                <label htmlFor="node-item">Node item</label>
                <input id="node-item" type="text" placeholder="What's this node?" value={this.state.item} onChange={this._onItemChange}  />
                <button type="submit" form="new-node">Add as a new node</button>
            </form>
        );
    }
});

module.exports = NewNodeForm;