var React = require('react');
var classNames = require('classnames');

var PlanEditModal = require('./PlanEditModal.react.jsx');

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
    _onSelect: function(event) {
        var plan_id = this.props.plan_id;
        AppActions.selectCurrentPlan(plan_id);
    },
    _onRemove: function(event) {
        AppActions.deletePlan(this.props.plan_id);
    },
    // savePlanChange: function(event) {
    //     event.preventDefault(); // prevent reloading
    //     var payload = {
    //         planTitle: this.state.title,
    //         planDescription: this.state.description
    //     };
    //     AppActions.updatePlanText(payload);
    // },
    render: function() {
        var title = this.props.title;
        var description = this.props.description;
        console.log(this.state.title);

        // Show prompt and hide orignal content when editing
        var titlePrompt = (this.state.isTitleEditing) ? (
            <div className="titlePrompt">
                <label htmlFor="plan-title-prompt">Plan title</label>
                <input className="card-title" id="plan-title-prompt" type="text" placeholder={this.state.title} value={this.state.title} onChange={this._onTitleChange} onBlur={this._onSave} />
            </div>
        ) : null;

        var descriptionPrompt = (this.state.isDescriptionEditing) ? (
            <div className="descriptionPrompt">
                <label htmlFor="plan-description-prompt">Description</label>
                <input className="card-text" id="plan-description-prompt" type="text" placeholder={this.state.description} value={this.state.description} onChange={this._onDescriptionChange} onBlur={this._onSave} />
            </div>
        ) : null;

        return (
            <div className="card card-block m-y-1 p-y-1">
                <div className="container">
                    <h4 className={classNames('card-title', 'col-xs-10', 'p-l-0', {'editing': this.state.isTitleEditing})} onDoubleClick={this._onTitleDoubleClick}>
                        {title}
                    </h4>

                <PlanEditModal plan_id={this.props.plan_id} title={this.props.title} description={this.props.description} />

                </div>  
                <hr className="hr-divider" />                

                {titlePrompt}
                <p className={classNames('card-text', {'editing': this.state.isDescriptionEditing})} onDoubleClick={this._onDescriptionDoubleClick}>{description}</p>
                {descriptionPrompt}
                <div className="btn-group">
                    <button className="btn btn-info" onClick={this._onSelect}>Select</button>
                    <button className="btn btn-warning" onClick={this._onRemove}>Delete</button>
                </div>
            </div>
        );
    }
});

module.exports = PlanItem;



