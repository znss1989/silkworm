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
        var plansHtml = plans.map(function(plan) {
            return (
                <PlanItem key={plan.id} index={plan.id} title={plan.title} description={plan.description} />
            );
        });
        return (
            <div id="plans-list">
                <NewPlanForm onSave={this._onSave} />
                {plansHtml}
            </div>
        );
    }
});

module.exports = Plans;