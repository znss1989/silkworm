var React = require('react');

var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var AppHeader = React.createClass({
    render: function() {
        return (
            <div>
                <img src="#" alt="logo" />
                <h5>Silkworm</h5>
                <img src="#" alt="user"/>
                <p>Log out</p>
            </div>
        );
    }
});

module.exports = AppHeader;