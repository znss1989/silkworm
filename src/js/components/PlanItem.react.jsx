var React = require('react');
var classNames = require('classnames');

var PlanEditModal = require('./PlanEditModal.react.jsx');
var PlanDeleteModal = require('./PlanDeleteModal.react.jsx');

var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var PlanItem = React.createClass({
    getInitialState: function() {
        return {
            title: this.props.title || '',
            description: this.props.description || ''
        };
    },
    _onSelect: function(event) {
        var plan_id = this.props.plan_id;
        AppActions.selectCurrentPlan(plan_id);
    },
    render: function() {
        var title = this.props.title;
        var description = this.props.description;

        return (
            <div className="card card-block m-y-1 p-y-1">
                <div className="container">
                    <h4 className="card-title col-xs-10 p-l-0">
                        {title}
                    </h4>

                <PlanEditModal plan_id={this.props.plan_id} title={this.props.title} description={this.props.description} />

                </div>  
                <hr className="hr-divider" />                
                <p className="card-text">{description}</p>
                <div className="btn-group">
                    <button className="btn btn-info" onClick={this._onSelect}>Select</button>
                    <button className="btn btn-warning" data-toggle="modal" data-target={"#plan-delete-modal" + this.props.plan_id}>Delete</button>

                    <PlanDeleteModal plan_id={this.props.plan_id} />
                </div>
            </div>
        );
    }
});

module.exports = PlanItem;



