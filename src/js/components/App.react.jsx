var React = require('react');

var AppHeader = require('./AppHeader.react.jsx');
var AppBody = require('./AppBody.react.jsx');
var AppFooter = require('./AppFooter.react.jsx');

var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

function getAppState() {
    return {
        allPlans: AppStore.getAllPlans(),
    };
};

var App = React.createClass({
    getInitialState: function() {
        return getAppState();
    },
    componentDidMount: function() {
        AppStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        AppStore.removeChangeListener(this._onChange);
    },
    _onChange: function() {
        this.setState(getAppState());
    },
    render: function() {
        return (
            <div>
                <AppHeader />
                <AppBody plans={this.state.allPlans} />
                <AppFooter /> 
            </div>
        );
    }
});

module.exports = App;