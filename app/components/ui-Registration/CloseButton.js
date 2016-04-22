var React = require("react");
var IcClose = require('../ui-Icons/Icons.js').IcClose;
var classNames = require('classnames');

var CloseButton = React.createClass({
	getInitialState: function() {
		return {liked: false};
	},

	handleClick: function(event) {
		this.setState({liked: !this.state.liked});
	},

	render: function () {
		return (
			<button className="t-buttonClose" onClick="" aria-label="close">
				<IcClose size="super" />
			</button>
		);
	}
});

module.exports = CloseButton;
