var React = require("react");
var IcClose = require('./Icons.js').IcClose;

var CloseButton = React.createClass({
	render: function () {
		return (
			<button className="t-buttonClose" onClick={this.props.modalCloseFunction} aria-label="close">
				<IcClose size="super" />
			</button>
		);
	}
});

module.exports = CloseButton;
