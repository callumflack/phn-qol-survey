var React = require("react");

var LoadingAnimation = React.createClass({
	render: function () {

		return (
			<div className="sk-three-bounce">
				<div className="sk-child sk-bounce1"></div>
				<div className="sk-child sk-bounce2"></div>
				<div className="sk-child sk-bounce3"></div>
			</div>
		);
	}
});

module.exports = LoadingAnimation;
