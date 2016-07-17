var React = require('react');

var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var PlanEditModal = React.createClass({
    getInitialState: function() {
        return {
            title: this.props.title || '',
            description: this.props.description || ''
        };
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
    _onSave: function(event) {
        event.preventDefault(); // prevent reloading
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
    render: function() {
        return (
            <div>
                <span className="label label-primary col-xs-2 m-t-2" data-toggle="modal" data-target={"#plan-edit-modal" + this.props.plan_id}>
                    Edit
                </span>

                <div className="modal fade" id={"plan-edit-modal" + this.props.plan_id} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <h4 className="modal-title" id="myModalLabel">Editing a plan...</h4>
                            </div>
                            <div className="modal-body">

                                <form id={"plan-edit" + this.props.plan_id} method="post" onSubmit={this._onSave}>
                                    <div className="form-group">
                                        <label htmlFor="plan-title-prompt">Plan title</label>
                                        <input className="form-control" id="plan-title-prompt" type="text" placeholder={this.props.title} onChange={this._onTitleChange}  />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="plan-description-prompt">Description</label>
                                        <textarea className="form-control" id="plan-description-prompt" type="text" placeholder={this.props.description} value={this.state.description} onChange={this._onDescriptionChange} ></textarea>
                                    </div>                  
                                </form>    
                                                                  
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-primary" type="submit" form={"plan-edit" + this.props.plan_id}>Save changes</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = PlanEditModal;

// plan_id={this.props.plan_id} title={this.props.title} description={this.props.description}