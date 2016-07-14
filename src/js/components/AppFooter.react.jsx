var React = require('react');

var AppActions = require('../actions/HomeActions');
var AppStore = require('../stores/HomeStore');

var AppFooter = React.createClass({
    render: function() {
        return (
            <div className="footer container text-xs-center">
                <p className="app-footer-p">&copy; 2016 Silkworms Plan. All rights reserved.</p>
            </div>
        );
    }
});

module.exports = AppFooter;