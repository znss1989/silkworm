var React = require('react');
var classNames = require('classnames');

var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Node = React.createClass({
    getInitialState: function() {
        return {
            isItemEditing: false,
            item: this.props.item || '',
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
    _onSave: function() {
        var payload = {
            nodeIndex: this.props.index,
            nodeItem: this.state.item,
        };
        AppActions.updateNodeText(payload);
        this.setState({
            isItemEditing: false,
        });
    },
    _onClickRemove: function(event) {
        AppActions.deleteNode(this.props.index);
    },
    render: function() {
        var item = this.props.item;
        console.log(item + " rendered!");
        // Show prompt and hide orignal content when editing
        var itemPrompt = (this.state.isItemEditing) ? (
            <div className="itemPrompt">
                <label htmlFor="node-item-prompt">Node item</label>
                <input id="node-item-prompt" type="text" placeholder={this.state.item} value={this.state.item} onChange={this._onItemChange} onBlur={this._onSave} />
            </div>
        ) : null;
        return (
            <div>
                <h5 className={classNames({'editing': this.state.isItemEditing})} onDoubleClick={this._onItemDoubleClick}>{item}</h5>
                {itemPrompt}
                <div onClick={this._onClickRemove}>-</div>
            </div>
        );
    }
});

module.exports = Node;