var React = require('react');

var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var NewPlanForm = React.createClass({
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
    createNewPlan: function(event) {
        event.preventDefault(); // prevent reloading
        var payload = {
            planTitle: this.state.title,
            planDescription: this.state.description
        };
        this.props.onSave(payload);
        this.setState({
            title: '',
            description: ''
        });
    },
    render: function() {
        return (
            <div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#new-plan-form">
                    Add a new plan
                </button>

                <div className="modal fade" id="new-plan-form" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            <h4 className="modal-title" id="myModalLabel">Add a new plan...</h4>
                            </div>
                            <div className="modal-body">
                                <form id="new-plan" method="post" onSubmit={this.createNewPlan}>
                                    <div className="form-group">
                                        <label htmlFor="plan-title">Plan title</label>
                                        <input className="form-control" id="plan-title" type="text" placeholder="What's your plan?" value={this.state.title} onChange={this._onTitleChange}  />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="plan-description">Description</label>
                                        <textarea className="form-control" id="plan-description" type="text" placeholder="A few words about this plan..." value={this.state.description} onChange={this._onDescriptionChange} ></textarea>
                                    </div>                                 
                                </form>                         
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-info" type="submit" form="new-plan">Save</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>            
            </div>

        );
    }
});

module.exports = NewPlanForm;