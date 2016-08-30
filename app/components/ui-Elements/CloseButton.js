var React = require("react");
var IcClose = require('./Icons.js').IcClose;

var CloseButton = React.createClass({
    propTypes: {
        label: React.PropTypes.string
    },
	close: function() {
		this.props.modalCloseFunction();
	},
	render: function () {
		return (
			<button className="t-buttonClose" onClick={this.close} aria-label="close">
				<IcClose size="super" />
                {this.props.label && <label>{this.props.label}</label>}
			</button>
		);
	}
});

module.exports = CloseButton;
