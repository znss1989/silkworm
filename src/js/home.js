var React = require('react');
var ReactDOM = require('react-dom');
var AppAPI = require('./utils/AppAPI.js');

var Home = require('./components/Home.react.jsx');

ReactDOM.render(
    <Home />,
    document.getElementById('home')
);