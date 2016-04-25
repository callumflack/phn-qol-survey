var React = require("react");
var IcClose = require('../ui-Icons/Icons.js').IcClose;
var classNames = require('classnames');

// Close btn in same file to study flow of state/props!
var CloseButton = React.createClass({
	getInitialState: function() {
		return { open: false };
	},

	handleClick: function(event) {
		/* set state to 'not open' */
		this.setState({ open: !this.state.open });
	},

	render: function () {
		return (
			/* bind this state to onClick w/ something like {this.click.bind(this)} ?? */
			<button className="t-buttonClose" onClick="" aria-label="close">
				<IcClose size="super" />
			</button>
		);
	}
});

module.exports = CloseButton;
