var React = require('react');
var classNames = require('classnames');

var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Node = React.createClass({
    getInitialState: function() {
        return {
            isItemEditing: false,
            isDetailEditing: false,
            item: this.props.item || '',
            detail: this.props.detail || ''
        };
    },
    _onItemDoubleClick: function() {
        this.setState({isItemEditing: true});
    },
    _onDetailDoubleClick: function() {
        this.setState({isDetailEditing: true});
    },
    _onItemChange: function(event) {
        this.setState({
            item: event.target.value
        });
    },
    _onDetailChange: function(event) {
        this.setState({
            detail: event.target.value
        });
    },
    _onSave: function() {
        var payload = {
            nodeIndex: this.props.index,
            nodeItem: this.state.item,
            nodeDetail: this.state.detail
        };
        AppActions.updateNodeText(payload);
        this.setState({
            isItemEditing: false,
            isDetailEditing: false
        });
    },
    _onClickRemove: function(event) {
        console.log("_onClickRemove invoked");
        AppActions.deleteNode(this.props.index);
    },
    render: function() {
        var item = this.props.item;
        var itemPrompt = (this.state.isItemEditing) ? (
            <div className="itemPrompt">
                <label htmlFor="node-item-prompt">Node item</label>
                <input id="node-item-prompt" type="text" placeholder={this.state.item} value={this.state.item} onChange={this._onItemChange} onBlur={this._onSave} />
            </div>
        ) : null;
        // var detailPrompt = (this.state.isDetailEditing) ? (
        //     <div className="detailPrompt">
        //         <label htmlFor="node-detail-prompt">Node detail</label>
        //         <input id="node-detail-prompt" type="text" placeholder={this.state.detail} value={this.state.detail} onChange={this._onDetailChange} onBlur={this._onSave} />
        //     </div>
        // ) : null;
        return (
            <div>
                <h5 className={classNames({'editing': this.state.isItemEditing})} onDoubleClick={this._onItemDoubleClick}>{item}</h5>
                <div onClick={this._onClickRemove}>-</div>
            </div>
        );
    }
});

module.exports = Node;

                // 
                // <p className={classNames({'editing': this.state.isDetailEditing})} onDoubleClick={this._onDetailDoubleClick}>{this.props.detail}</p>
                // 