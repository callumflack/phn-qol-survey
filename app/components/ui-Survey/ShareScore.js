var React = require("react");
var classNames = require('classnames');
var IcSuccess = require('../ui-Elements/Icons.js').IcSuccess;

var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

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
			smsInvalid: false,
			emailInvalid: false,
			smsPending: false,
			emailPending: false
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

		var emailAddress = this.emailInput.value,
			shareScore = this;

		emailAddress = emailAddress.replace(/\s/g, "");
		if (! EMAIL_REGEX.test(emailAddress)
			|| emailAddress.length === 0) {
			this.setState({
				emailSent: false,
				emailInvalid: true,
				emailPending: false
			});
			return false;
		}

		try { this.props.sendEmail(
				this.emailInput.value,
				function (result) {
					var success = result.ok? true : false;
					shareScore.setState({
						emailSent: success,
						emailInvalid: !success,
						emailPending: false
					});
				}
			);
		}
		catch(e) {
			this.setState({
				emailSent: false,
				emailInvalid: true,
				emailPending: false
			});
			return false;
		}

		this.emailInput.blur();
		return false;
	},
	smsFormSubmit: function(event) {
		event.preventDefault();
		event.stopPropagation();

		var phoneNum = this.smsInput.value,
			shareScore = this;

		phoneNum = phoneNum.replace(/\s/g, "");
		if (! /^[0-9]{10}|\+61[0-9]{8,9}|00[0-9]{8,9}$/.test(phoneNum)
			|| phoneNum.length > 11) {
			this.setState({
				smsSent: false,
				smsInvalid: true,
				smsPending: false
			});
			return false;
		}

		this.setState({
			smsSent: false,
			smsInvalid: false,
			smsPending: true
		});

		try {
			this.props.sendSms(
				this.smsInput.value,
				function (result) {
					var success = result.ok? true : false;
					shareScore.setState({
						smsSent: success,
						smsInvalid: !success,
						smsPending: false
					});
				}
			);
		}
		catch(e) {
			this.setState({
				smsSent: false,
				smsInvalid: true,
				smsPending: false
			});
			return false;
		}

		this.smsInput.blur();
		return false;
	},
	render: function () {
		var smsFormGroupClasses = classNames({
				'Form-group': true,
				'u-flexGrow1': true,
				'u-xs-paddingRD1': true,
				'u-marginBD1': true,
				'is-active': this.state.smsInputVisibile
			}),
			smsFormClasses = classNames({
				'Form': true,
				'Form--sm': true,
				'u-xs-flex': true,
				'u-mxs-marginT13': true,
				'u-mxs-marginB': true,
				'u-marginTD2': true,
				'is-active': this.state.smsInputVisibile,
				'has-error': this.state.smsInvalid,
				'is-pending': this.state.smsPending,
				'is-successful': this.state.smsSent
			}),
			emailFormGroupClasses = classNames({
				'Form-group': true,
				'u-flexGrow1': true,
				'u-xs-paddingRD1': true,
				'u-marginBD1': true,
				'is-active': this.state.emailInputVisibile
			}),
			emailFormClasses = classNames({
				'Form': true,
				'Form--sm': true,
				'u-xs-flex': true,
				'u-mxs-marginT': true,
				'is-active': this.state.emailInputVisibile,
				'has-error': this.state.emailInvalid,
				'is-pending': this.state.emailPending,
				'is-successful': this.state.emailSent
			});

		return (
			<div>
			<form
				className={emailFormClasses}
				method="post"
				name="ShareScoreByEmailForm"
				onSubmit={this.emailFormSubmit}>
				<div className={emailFormGroupClasses} onClick={this.emailHandleClick}>
					<label for="input">Add an email</label>
					<input
						className="Form-control"
						id="emailInput"
						type="email"
						name="email"
						placeholder=""
						onFocus={this.emailHandleClick}
						onBlur={this.emailHandleBlur}
						ref={(ref) => this.emailInput = ref}
						disabled={(this.state.emailSent)? true : undefined}
						required />
				</div>
				<div className="Form-group u-flexExpandLeft">
					<span className="Form-loadingWrapper"><div className="sk-spinner-pulse"></div></span>
					<input
						className="Button t-button--full t-xs-button--md t-buttonSecondary--counter"
						type="submit" name=""
						value={(this.state.emailSent)? "Sent" : "Send"}
						disabled={(this.state.emailSent)? true : undefined} />
				</div>
			</form>
			<form
				className={smsFormClasses}
				method="post"
				name="ShareScoreBySMSForm"
				onSubmit={this.smsFormSubmit}>
				<div className={smsFormGroupClasses} onClick={this.smsHandleClick}>
					<label for="input">And/or add a mobile number</label>
					<input
						className="Form-control"
						id="smsInput"
						type="tel"
						name="sms"
						placeholder=""
						onFocus={this.smsHandleClick}
						onBlur={this.smsHandleBlur}
						ref={(ref) => this.smsInput = ref}
						disabled={(this.state.smsSent)? true : undefined}
						required />
				</div>
				<div className="Form-group u-flexExpandLeft">
					<span className="Form-loadingWrapper"><div className="sk-spinner-pulse"></div></span>
					<input
						className="Button t-button--full t-xs-button--md t-buttonSecondary--counter"
						type="submit" name=""
						value={(this.state.smsSent)? "Sent" : "Send"}
						disabled={(this.state.smsSent)? true : undefined} />
				</div>
			</form>
			</div>

		);
	}
});

module.exports = ShareScore;
