var React = require("react");
var classNames = require('classnames');

var ShareScore = React.createClass({
	submitHandler: function(submitEvent) {
		// Supress the click (and prevent navigation).
		submitEvent.preventDefault();
		submitEvent.stopPropagation();

		// Instruct this component to send stuff.
		// var providerCode = this.pcInput.value;
		// this.props.registerDevice(providerCode, this.validationFailCallback);

		// Unfocus our input
		this.smsInput.blur();

		return false;
	},
	getInitialState: function() {
		return {
			emailInputVisibile: false,
			smsInputVisibile: false,
			emailSent: false,
			smsSent: false,
			invalidData: false
		};
	},
	emailHandleClick: function(event) {
		this.setState({
				emailInputVisibile: true
			},
			function() {
				if (this.state.emailInputVisibile)
					this.emailInput.focus();
			}
		);
	},
	smsHandleClick: function(event) {
		this.setState({
				smsInputVisibile: true
			},
			function() {
				if (this.state.smsInputVisibile)
					this.smsInput.focus();
			}
		);
	},
	emailHandleBlur: function() {
		// We're going to update the state ONLY IF there's no data in our input.
		if (this.emailInput.value === "")
			this.setState({ emailInputVisibile: false });
	},
	smsHandleBlur: function() {
		// We're going to update the state ONLY IF there's no data in our input.
		if (this.smsInput.value === "")
			this.setState({ smsInputVisibile: false });
	},
	emailFormSubmit: function(event) {
		event.preventDefault();
		event.stopPropagation();
		
		try { this.props.sendEmail(this.emailInput.value); }
		catch(e) { return false; }

		this.emailInput.blur();
		this.setState({ emailSent: true });
		return false;
	},
	smsFormSubmit: function(event) {
		event.preventDefault();
		event.stopPropagation();

		try { this.props.sendSms(this.smsInput.value); }
		catch(e) { return false; }

		this.smsInput.blur();
		this.setState({ smsSent: true });
		return false;
	},
	render: function () {
		var smsFormGroupClasses = classNames({
				'Form-group': true,
				'Form-group--sm': true,
				'u-flexGrow1': true,
				'u-xs-paddingRD1': true,
				'u-marginBD1': true,
				'is-active': this.state.smsInputVisibile,
				'has-error': this.state.invalidData
			}),
			emailFormGroupClasses = classNames({
				'Form-group': true,
				'Form-group--sm': true,
				'u-flexGrow1': true,
				'u-xs-paddingRD1': true,
				'u-marginBD1': true,
				'is-active': this.state.emailInputVisibile,
				'has-error': this.state.invalidData
			});

		return (
			<div>
			<form
				className="u-xs-flex u-mxs-marginT"
				method="post"
				name="ShareScoreByEmailForm"
				onSubmit={this.emailFormSubmit}>
				<div className={emailFormGroupClasses} onClick={this.emailHandleClick}>
					<label for="input">Add an email</label>
					<input
						className="Form-control"
						id="input"
						type="email"
						name=""
						placeholder=""
						onFocus={this.emailHandleClick}
						onBlur={this.emailHandleBlur}
						ref={(ref) => this.emailInput = ref}
						required />
				</div>
				<div className="Form-group u-flexExpandLeft">
					<input
						className="Button t-button--full t-xs-button--md t-buttonSecondary u-colorBrandCount"
						type="submit" value="Send" name="" disabled={(this.state.emailSent)? true : undefined} />
				</div>
			</form>
			<form
				className="u-xs-flex u-mxs-marginT13 u-mxs-marginB u-marginTD2"
				method="post"
				name="ShareScoreBySMSForm"
				onSubmit={this.smsFormSubmit}>
				<div className={smsFormGroupClasses} onClick={this.smsHandleClick}>
					<label for="input">And/or add a mobile number</label>
					<input
						className="Form-control"
						id="input"
						type="tel"
						name=""
						placeholder=""
						onFocus={this.smsHandleClick}
						onBlur={this.smsHandleBlur}
						ref={(ref) => this.smsInput = ref}
						required />
				</div>
				<div className="Form-group u-flexExpandLeft">
					<input
						className="Button t-button--full t-xs-button--md t-buttonSecondary u-colorBrandCount"
						type="submit" value="Send" name="" disabled={(this.state.smsSent)? true : undefined} />
				</div>
			</form>
			</div>

		);
	}
});

module.exports = ShareScore;
