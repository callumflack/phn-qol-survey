var React = require("react");

var StartButton = React.createClass({
	render: function () {
		return (
			<div>
				<a className="Button t-button" href={(this.props.deviceRegistered)? "#survey" : undefined} name="button" disabled={!this.props.deviceRegistered}>Start survey</a>
			</div>
		);
	}
});

module.exports = StartButton;
