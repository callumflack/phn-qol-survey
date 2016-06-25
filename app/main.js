var React = require('react');
var ReactDOM = require('react-dom');
var fetch = require('fetch');
var Promise = Promise || require('es6-promise').Promise;

var resolveRoute = function () {

  if (!location.hash || location.hash.length === 1) {
	require.ensure([], function () {
	  var Home = require('./components/ui-Home/Home.js');
	  ReactDOM.render(<Home />, document.getElementById('app'));
	});

  } else if (location.hash === '#survey') {
	require.ensure([], function () {
	  var Survey = require('./components/ui-Survey/Survey.js');
	  ReactDOM.render(<Survey />, document.getElementById('app'));
	});
  } else if (location.hash === '#admin') {
	require.ensure([], function () {
	  var Admin = require('./components/ui-Admin/Admin.js');
	  ReactDOM.render(<Admin />, document.getElementById('app'));
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
