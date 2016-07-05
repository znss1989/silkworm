var React = require('react');

var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var PlanItem = React.createClass({
    _onClickRemove: function(event) {
        console.log("_onClickRemove invoked");
        console.log(this.props);
        AppActions.deletePlan(this.props.index);
    },
    render: function() {
        return (
            <div>
                <h4>{this.props.title}</h4>
                <p>{this.props.description}</p>
                <div onClick={this._onClickRemove}>-</div>
            </div>
        );
    }
});

module.exports = PlanItem;