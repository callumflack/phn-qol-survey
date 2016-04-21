var React = require("react");
var Nav = require("../ui-Nav/Nav.js");
var Content = require("./Content.js");

require('./../../stylesheets/app.scss');

var Home = React.createClass({
	render: function () {
		return (
			<div>
				<Nav />
				<Content />
			</div>
		);
	}
});

module.exports = Home;
