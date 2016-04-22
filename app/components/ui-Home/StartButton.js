var React = require("react");

var StartButton = React.createClass({
	getInitialState: function() {
		return {
			deviceRegistered: false
		};
	},

	render: function () {
		return (
			<div>
				<a className="Button t-button" href="#survey" name="button" disabled>Start survey</a>
			</div>
		);
	}
});

module.exports = StartButton;
