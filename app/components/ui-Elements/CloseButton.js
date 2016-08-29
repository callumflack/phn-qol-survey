var React = require("react");
var IcClose = require('./Icons.js').IcClose;

var CloseButton = React.createClass({
	close: function() {
		this.props.modalCloseFunction();
	},
	render: function () {
		return (
			<button className="t-buttonClose" onClick={this.close} aria-label="close">
				<IcClose size="super" />
                <label>Finish</label>
			</button>
		);
	}
});

module.exports = CloseButton;
