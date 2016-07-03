var React = require('react');

var HomeActions = require('../actions/HomeActions');
var HomeStore = require('../stores/HomeStore');

var HomeBody = React.createClass({
    render: function() {
        return (
            <div>
                <button type="button">Login your account</button>
                <button type="button">Sign up a new account</button>
            </div>
        );
    }
});

module.exports = HomeBody;