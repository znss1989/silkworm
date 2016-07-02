var React = require('react');

var HomeActions = require('../actions/HomeActions');
var HomeStore = require('../stores/HomeStore');

var HomeHeader = React.createClass({
    render: function() {
        return (
            <div>
                <img src="#" alt="logo" />
                <h1>Silkworm Plan</h1>
                <p>A web-based app for organizing plans/work flows and managing progress updates in life</p>
            </div>
        );
    }
});

module.exports = HomeHeader;