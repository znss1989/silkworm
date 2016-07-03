var React = require('react');
var ReactDOM = require('react-dom');
var AppAPI = require('./utils/AppAPI.js');

var App = require('./components/App.react.jsx');

ReactDOM.render(
    <App />,
    document.getElementById('app')
);