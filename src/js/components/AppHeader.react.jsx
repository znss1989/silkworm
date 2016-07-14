var React = require('react');

var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var AppHeader = React.createClass({
    render: function() {
        return (
            <nav className="navbar navbar-fixed-top navbar-dark bg-info">
                <div className="container">
                    <ul className="nav navbar-nav">
                        <li className="nav-item active">
                            <a className="navbar-brand" href="#">Silkworm <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./index.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#plans">Plans</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#nodes">Current</a>
                        </li>
                        <li className="nav-item pull-sm-right m-r-0 hidden-xs-down">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = AppHeader;

            // <nav className="container-fluid navbar navbar-dark bg-inverse">
            //     <div className="container">
            //         <a className="navbar-brand" href="#">
            //             <img className="nav-item" src="#" alt="logo" />
            //         </a>
            //         <a className="navbar-brand" href="#">Silkworm Plan</a>
            //         <a className="nav-item nav-link" href="#">Home</a>
            //         <a className="nav-item nav-link" href="#">Application</a>
            //         <a className="nav-item nav-link" href="#">About</a>
            //         <div className="nav-item nav-link pull-xs-right">
            //             <a href="#">
            //                 <img src="#" alt="user"/>
            //             </a>
            //             <a href="#">Log out</a>
            //         </div>
            //     </div>
            // </nav>