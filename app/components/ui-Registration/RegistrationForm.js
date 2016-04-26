var React = require("react");
var classNames = require('classnames');

var RegistrationForm = React.createClass({
	/**
	 * Supresses the navigation and hands off device registration to the Home.js
	 * component (where it belongs). The function that handles device
	 * registration is a property of this component named `registerDevice` (and
	 * is passed down through the chain of parents).
	 */
	submitHandler: function(submitEvent) {
		// Supress the click (and prevent navigation).
		submitEvent.preventDefault();
		submitEvent.stopPropagation();
		
		// Instruct the Home component to register the device.
		var providerCode = this.pcInput.value;
		this.props.registerDevice(providerCode);

		return false;
	},
	render: function () {
		return (
			<form className="u-marginT3 u-flex" method="post" name="registration-form" onSubmit={this.submitHandler}>
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
