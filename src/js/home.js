var React = require('react');
var ReactDOM = require('react-dom');
var AppAPI = require('./utils/AppAPI.js');

var Home = require('./components/Home.react');

ReactDOM.render(
    <Home />,
    document.getElementById('home')
);