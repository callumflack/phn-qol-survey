var React = require("react");
var classNames = require('classnames');

const DEVICE_REG_URL = "http://localhost:3000/device";

var RegistrationForm = React.createClass({
	submitHandler: function(submitEvent) {
		// Supress the click (and prevent navigation).
		submitEvent.preventDefault();
		submitEvent.stopPropagation();
		
		// Instruct the Home component to register the device.
		this.props.registerDevice(this.pcInput.value);
		return false;
	},
	render: function () {
		return (
			<form className="u-marginT3 u-flex" method="post" name="registration-form" onSubmit={this.registerDevice}>
				<div className="Form-group u-flexGrow1 u-paddingRD1">
					<label for="code">Your service provider code</label>
					<input className="Form-control required" id="code" type="text" name="providerCode" placeholder="" ref={(ref) => this.pcInput = ref} required></input>
				</div>
				<div className="Form-group u-flexExpandLeft">
					<input className="Button t-button t-button--md" type="submit" value="Register" name="submit" />
				</div>
			</form>
		);
	}
});

module.exports = RegistrationForm;
