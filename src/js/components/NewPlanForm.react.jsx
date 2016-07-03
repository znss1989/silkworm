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
        console.log(this.state.title);
        this.setState({
            title: event.target.value
        });
    },
    _onDescriptionChange: function() {
        console.log(this.state.description);
        this.setState({
            description: event.target.value
        });
    },
    createNewPlan: function(event) {
        event.preventDefault(); // prevent reloading
        console.log("Form submitted...");
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
            <form id="new-plan" onsubmit={this.createNewPlan}>
                <label htmlFor="plan-title">Plan title</label>
                <input id="plan-title" type="text" placeholder="What's your plan?" value={this.state.title} onChange={this._onTitleChange}  />
                <label htmlFor="plan-description">Description</label>
                <input id="plan-description" type="text" placeholder="A few words about this plan..." value={this.state.description} onChange={this._onDescriptionChange} />
                <button type="submit" form="new-plan">Add as a new plan</button>
            </form>
        );
    }
});

module.exports = NewPlanForm;