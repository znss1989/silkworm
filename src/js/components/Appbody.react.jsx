var React = require('react');

var Plans = require('./Plans.react.jsx');

var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var AppBody = React.createClass({
    render: function() {
        return (
            <div>
                <Plans />
            </div>
        );
    }
});

module.exports = AppBody;