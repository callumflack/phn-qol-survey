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
		this.pcInput.blur();

		return false;
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
			'Form-group--sm': true,
			'u-flexGrow1': true,
			'u-xs-paddingRD1': true,
			'u-marginBD1': true,
			'is-active': this.state.inputVisible,
			'has-error': this.state.invalidData
		});

		return (
			<div>
			<form
				className="u-xs-flex u-mxs-marginT"
				method="post"
				name="ShareScoreByEmailForm"
				onSubmit={this.submitHandler}>
				<div className={formGroupClasses} onClick={this.handleClick}>
					<label for="input">Add an email</label>
					<input
						className="Form-control"
						id="input"
						type="text"
						name=""
						placeholder=""
						onBlur={this.handleBlur}
						ref={(ref) => this.pcInput = ref}
						required />
				</div>
				<div className="Form-group u-flexExpandLeft">
					<input
						className="Button t-button--full t-xs-button--md t-buttonSecondary u-colorBrandCount"
						type="submit" value="Send" name="" />
				</div>
			</form>
			<form
				className="u-xs-flex u-mxs-marginT13 u-mxs-marginB u-marginTD2"
				method="post"
				name="ShareScoreBySMSForm"
				onSubmit={this.submitHandler}>
				<div className={formGroupClasses} onClick={this.handleClick}>
					<label for="input">And/or add a mobile number</label>
					<input
						className="Form-control"
						id="input"
						type="text"
						name=""
						placeholder=""
						onBlur={this.handleBlur}
						ref={(ref) => this.pcInput = ref}
						required />
				</div>
				<div className="Form-group u-flexExpandLeft">
					<input
						className="Button t-button--full t-xs-button--md t-buttonSecondary u-colorBrandCount"
						type="submit" value="Send" name="" />
				</div>
			</form>
			</div>

		);
	}
});

module.exports = ShareScore;
