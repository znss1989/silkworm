var React = require('react');

var HomeHeader = require('./HomeHeader.react');
var HomeBody = require('./HomeBody.react');
var HomeFooter = require('./HomeFooter.react');

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
    render: function() {
        return (
            <div>
                Here goes the home page.
            </div>
        );
    },
    _onChange: function() {
        this.setState(getHomeState());
    },
    render: function() {
        return (
            <div>
                <HomeHeader></HomeHeader>
                <HomeBody></HomeBody>
                <HomeFooter></HomeFooter>
            </div>
        );
    }
});

module.exports = Home;