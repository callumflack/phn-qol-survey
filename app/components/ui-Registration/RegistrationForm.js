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
		
		if (this.state.registrationPending) return false;

		// Instruct the Home component to register the device.
		var providerCode = this.pcInput.value;
		this.props.registerDevice(providerCode, this.validationFailCallback);

		this.setState({ 
			invalidData: false,
			registrationPending: true
		});

		// Unfocus our input
		this.pcInput.blur();

		return false;
	},
	/**
	 * Lets our user know that their value for the provider code is invalid.
	 */
	validationFailCallback: function() {
		this.setState({ 
			invalidData: true,
			registrationPending: false
		});
	},
	getInitialState: function() {
		return {
			inputVisible: false,
			invalidData: false,
			registrationPending: false
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
		var formClasses = classNames({
			'Form': true,
			'u-xs-flex': true,
			'u-mxs-marginT2': true,
			'u-marginT3': true,
			'has-error': this.state.invalidData,
			'is-pending': this.state.registrationPending
		}),
		formGroupClasses = classNames({
			'Form-group': true,
			'is-active': this.state.inputVisible,
			'u-flexGrow1': true,
			'u-xs-paddingRD1': true
		}),
		formLoadingClasses = classNames({
			'Form-loadingWrapper': true,
			'is-active': this.state.registrationPending,
			'u-colorWhite': this.state.registrationPending
		});

		return (
			<form className={formClasses} method="post" name="registration-form" onSubmit={this.submitHandler}>
				<div className={formGroupClasses} onClick={this.handleClick}>
					<label for="providerCode">Your service provider code</label>
					<input 
						className="Form-control required"
						id="providerCode"
						type="text"
						name="providerCode"
						onFocus={this.handleClick}
						onBlur={this.handleBlur}
						placeholder=""
						ref={(ref) => this.pcInput = ref}
						required
					></input>
				</div>
				<div className="Form-group u-flexExpandLeft">
					<input className="Button t-button t-button--full t-xs-button--md" type="submit" value="Register" name="submit" />
					<span className={formLoadingClasses}><div className="sk-spinner-pulse"></div></span>
				</div>
			</form>
		);
	}
});

module.exports = RegistrationForm;
