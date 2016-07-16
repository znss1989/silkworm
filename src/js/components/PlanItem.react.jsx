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
    _onSelect: function(event) {
        var plan_id = this.props.plan_id;
        AppActions.selectCurrentPlan(plan_id);
    },
    _onSave: function() {
        var payload = {
            planId: this.props.plan_id,
            planTitle: this.state.title,
            planDescription: this.state.description
        };
        AppActions.updatePlanText(payload);
        this.setState({
            isTitleEditing: false,
            isDescriptionEditing: false
        });
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
                <h4 className={classNames('card-title', {'editing': this.state.isTitleEditing})} onDoubleClick={this._onTitleDoubleClick}>
                    {title}
                </h4>
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

                    // <span className="label label-primary pull-xs-right" data-toggle="modal" data-target="#plan-edit-modal">
                    //     Edit
                    // </span>

                    // <div className="modal fade" id="plan-edit-modal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    //     <div className="modal-dialog" role="document">
                    //         <div className="modal-content">
                    //             <div className="modal-header">
                    //                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    //                     <span aria-hidden="true">&times;</span>
                    //                 </button>
                    //                 <h4 className="modal-title" id="myModalLabel">Editing a plan...</h4>
                    //             </div>
                    //             <div className="modal-body">
                    //                 <form id="plan-edit" method="post" onSubmit={this.savePlanChange}>
                    //                     <div className="form-group">
                    //                         <label htmlFor="plan-title-prompt">Plan title</label>
                    //                         <input className="form-control" id="plan-title-prompt" type="text" placeholder={this.state.title} value={this.state.title} onChange={this._onTitleChange}  />
                    //                     </div>
                    //                     <div className="form-group">
                    //                         <label htmlFor="plan-description-prompt">Description</label>
                    //                         <textarea className="form-control" id="plan-description-prompt" type="text" placeholder={this.state.description} value={this.state.description} onChange={this._onDescriptionChange} ></textarea>
                    //                     </div>                  
                    //                 </form>                                      
                    //             </div>
                    //             <div className="modal-footer">
                    //                 <button className="btn btn-primary" type="submit" form="plan-edit">Save changes</button>
                    //                 <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    //             </div>
                    //         </div>
                    //     </div>
                    // </div>