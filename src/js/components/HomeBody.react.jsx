var React = require('react');

var HomeActions = require('../actions/HomeActions');
var HomeStore = require('../stores/HomeStore');

var HomeBody = React.createClass({
    render: function() {
        return (
            <div className="container">
                <div className="row">
                    <form method="post" action="./app.html">
                        <button type="submit" className="btn btn-primary col-xs-8 col-xs-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">Enter App</button>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = HomeBody;