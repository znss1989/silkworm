var React = require('react');

var HomeActions = require('../actions/HomeActions');
var HomeStore = require('../stores/HomeStore');

var HomeFooter = React.createClass({
    render: function() {
        return (
            <div className="footer navbar-fixed-bottom container text-xs-center">
                <p className="home-footer-p m-x-auto">&copy; 2016 Silkworms Plan. All rights reserved.</p>
            </div>
        );
    }
});

module.exports = HomeFooter;