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
		this.props.registerDevice(providerCode, this.validationFailCallback);
		
		// Unfocus our input
		this.pcInput.blur();
		
		return false;
	},
	/**
	 * Lets our user know that their value for the provider code is invalid.
	 */
	validationFailCallback: function() {
		this.setState({ invalidData: true });
	},
	getInitialState: function() {
		return {
			inputVisible: false,
			invalidData: false
		};
	},
	handleClick: function(event) {
		this.setState({
			inputVisible: true
		}, this.focusAfterClick);
	},
	focusAfterClick: function() {
		if (this.state.inputVisible)
			this.pcInput.focus();
	},
	handleBlur: function() {
		// We're going to update the state ONLY IF there's no data in our input.
		if (this.pcInput.value === "")
			this.setState({ inputVisible: false });	
	},
	render: function () {
		var formGroupClasses = classNames({
			'Form-group': true,
			'u-flexGrow1': true,
			'u-paddingRD1': true,
			'is-active': this.state.inputVisible,
			'has-error': this.state.invalidData
		});

		return (
			<form className="u-marginT3 u-flex" method="post" name="registration-form" onSubmit={this.submitHandler}>
				<div className={formGroupClasses} onClick={this.handleClick}>
					<label for="providerCode">Your service provider code</label>
					<input className="Form-control required" id="code" type="text" name="providerCode" onBlur={this.handleBlur} placeholder="" ref={(ref) => this.pcInput = ref} required></input>
				</div>
				<div className="Form-group u-flexExpandLeft">
					<input className="Button t-button t-button--md" type="submit" value="Register" name="submit" />
				</div>
			</form>
		);
	}
});

module.exports = RegistrationForm;
