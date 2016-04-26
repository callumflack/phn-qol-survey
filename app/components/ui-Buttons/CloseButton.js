var React = require("react");
var IcClose = require('../ui-Icons/Icons.js').IcClose;
var classNames = require('classnames');

// Close btn in same file to study flow of state/props!
var CloseButton = React.createClass({
	render: function () {
		return (
			<button className="t-buttonClose" aria-label="close">
				<IcClose size="super" />
			</button>
		);
	}
});

module.exports = CloseButton;
