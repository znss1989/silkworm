var React = require('react');
var classNames = require('classnames');

var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var PlanItem = React.createClass({
    getInitialState: function() {
        return {
            isTitleEditing: false,
            isDescriptionEditing: false,
            title: this.props.title || '',
            description: this.props.description || ''
        };
    },
    _onTitleDoubleClick: function() {
        this.setState({isTitleEditing: true});
    },
    _onDescriptionDoubleClick: function() {
        this.setState({isDescriptionEditing: true});
    },
    _onTitleChange: function(event) {
        this.setState({
            title: event.target.value
        });
    },
    _onDescriptionChange: function(event) {
        this.setState({
            description: event.target.value
        });
    },
    _onSave: function() {
        var payload = {
            planIndex: this.props.index,
            planTitle: this.state.title,
            planDescription: this.state.description
        };
        AppActions.updatePlanText(payload);
        this.setState({
            isTitleEditing: false,
            isDescriptionEditing: false
        });
    },
    _onClickRemove: function(event) {
        AppActions.deletePlan(this.props.index);
    },
    render: function() {
        var title = this.props.title;
        var description = this.props.description;
        var titlePrompt = (this.state.isTitleEditing) ? (
            <div className="titlePrompt">
                <label htmlFor="plan-title-prompt">Plan title</label>
                <input id="plan-title-prompt" type="text" placeholder={this.state.title} value={this.state.title} onChange={this._onTitleChange} onBlur={this._onSave} />
            </div>
        ) : null;
        var descriptionPrompt = (this.state.isDescriptionEditing) ? (
            <div className="titlePrompt">
                <label htmlFor="plan-description-prompt">Description</label>
                <input id="plan-description-prompt" type="text" placeholder={this.state.description} value={this.state.description} onChange={this._onDescriptionChange} onBlur={this._onSave} />
            </div>
        ) : null;
        return (
            <div>
                <h4 className={classNames({'editing': this.state.isTitleEditing})} onDoubleClick={this._onTitleDoubleClick}>{title}</h4>
                {titlePrompt}
                <p className={classNames({'editing': this.state.isDescriptionEditing})} onDoubleClick={this._onDescriptionDoubleClick}>{description}</p>
                {descriptionPrompt}
                <div onClick={this._onClickRemove}>-</div>
            </div>
        );
    }
});

module.exports = PlanItem;