var React = require('react');
var ReactDOM = require('react-dom');
var AppAPI = require('./utils/AppAPI.js');

var App = require('./components/App.react');

ReactDOM.render(
    <App />,
    document.getElementById('app')
);