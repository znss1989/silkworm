var React = require('react');

var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var PlanDeleteModal = React.createClass({
    _onRemove: function(event) {
        AppActions.deletePlan(this.props.plan_id);
    },
    render: function() {
        return (
            <div className="modal fade" id={"plan-delete-modal" + this.props.plan_id} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <h4 className="modal-title" id="myModalLabel">
                                Are you sure to delete this plan?
                            </h4>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" type="button" onClick={this._onRemove}>Delete</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>                
        );
    }
});

module.exports= PlanDeleteModal;