var React = require('react');
var ReactDOM = require('react-dom');

var resolveRoute = function () {

  if (!location.hash || location.hash.length === 1) {
	require.ensure([], function () {
	  var Home = require('./Home.js');
	  ReactDOM.render(<Home />, document.getElementById('app'));
	});

  } else if (location.hash === '#device-registration') {
	require.ensure([], function () {
	  var DevReg = require('./device-reg/DeviceRegistration.js');
	  ReactDOM.render(<DevReg />, document.getElementById('app'));
	});
  } else if (location.hash === '#survey') {
	require.ensure([], function () {
	  var Survey = require('./survey/Survey.js');
	  ReactDOM.render(<Survey />, document.getElementById('app'));
	});
  }

};

window.onhashchange = resolveRoute;
resolveRoute();

// If hot swapping can be done, do it by resolving the current route
// and render the application again
if (module.hot) {
  module.hot.accept(resolveRoute);
}
