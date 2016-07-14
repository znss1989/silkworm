var React = require('react');

var NewPlanForm = require('./NewPlanForm.react.jsx');
var PlanItem = require('./PlanItem.react.jsx');

var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Plans = React.createClass({
    _onSave: function(payload) {
        if (payload.planTitle) {
            AppActions.createPlan(payload);
        }
    },
    render: function() {
        var plans = this.props.plans;
        console.log(plans);
        var plansHtml = plans.map(function(plan) {
            return (
                <PlanItem key={plan.id} index={plan.id} title={plan.title} description={plan.description} />
            );
        });
        return (
            <div className="m-t-3" id="plans-list">
                <h3 className="display-5 text-info text-xs-center m-y-1">All My Plans</h3>
                <hr className="hr-divider" />
                <NewPlanForm onSave={this._onSave} />
                {plansHtml}
            </div>
        );
    }
});

module.exports = Plans;