var React = require('react');

var HomeActions = require('../actions/HomeActions');
var HomeStore = require('../stores/HomeStore');

var HomeHeader = React.createClass({
    render: function() {
        return (
            <div className="container text-xs-center">
                <h1 className="display-4 m-t-3 p-t-3">Silkworm Plan</h1>
                <p className="lead m-b-3 p-t-2 p-b-3">Organize & manage plans/flows in work & life</p>
            </div>
        );
    }
});

module.exports = HomeHeader;