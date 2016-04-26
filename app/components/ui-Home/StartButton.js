var React = require("react");

var StartButton = React.createClass({
	render: function () {
		return (
			<div>
				<a className="Button t-button" href="#survey" name="button" disabled={!this.props.deviceRegistered}>Start survey</a>
			</div>
		);
	}
});

module.exports = StartButton;
