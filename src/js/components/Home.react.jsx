var React = require('react');

var HomeHeader = require('./HomeHeader.react.jsx');
var HomeBody = require('./HomeBody.react.jsx');
var HomeFooter = require('./HomeFooter.react.jsx');

var HomeActions = require('../actions/HomeActions');
var HomeStore = require('../stores/HomeStore');

function getHomeState() {
    return {};
};

var Home = React.createClass({
    getInitialState: function() {
        return getHomeState();
    },
    componentDidMount: function() {
        HomeStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        HomeStore.removeChangeListener(this._onChange);
    },
    _onChange: function() {
        this.setState(getHomeState());
    },
    render: function() {
        return (
            <div>
                <HomeHeader />
                <HomeBody />
                <HomeFooter />
            </div>
        );
    }
});

module.exports = Home;