var React = require('react');

var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var PlanItem = React.createClass({
    getInitialState: function() {
        return {
            isTitleEditing: false,
            isDescriptionEditing: false
        };
    },
    _onTitleDoubleClick: function() {
        this.setState({isTitleEditing: true});
    },
    _onDescriptionDoubleClick: function() {
        this.setState({isDescriptionEditing: true});
    },
    _onClickRemove: function(event) {
        console.log("_onClickRemove invoked");
        console.log(this.props);
        AppActions.deletePlan(this.props.index);
    },
    render: function() {
        return (
            <div>
                <h4 className={classNames({'editable': this.state.isTitleEditing})} onDoubleClick={this._onTitleDoubleClick}>{this.props.title}</h4>
                <p className={classNames({'editable': this.state.isDescriptionEditing})} onDoubleClick={this._onDescriptionDoubleClick}>{this.props.description}</p>
                <div onClick={this._onClickRemove}>-</div>
            </div>
        );
    }
});

module.exports = PlanItem;