var React = require('react');

var PlanItem = require('./PlanItem.react.jsx');

var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Plans = React.createClass({
    getInitialState: function() {
        return {
            plans: AppStore.getAllPlans()
        };
    },
    render: function() {
        var plans = AppStore.getAllPlans();
        var plansHtml = plans.map(function(plan) {
            return (
                <PlanItem title={plan.title} description={plan.description} />
            );
        });
        return (
            <div>
                {plansHtml}
            </div>
        );
    }
});

module.exports = Plans;