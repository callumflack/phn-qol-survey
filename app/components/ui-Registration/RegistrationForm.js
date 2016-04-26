var React = require("react");
var classNames = require('classnames');

var RegistrationForm = React.createClass({
	registerDevice: function(submitEvent) {
		console.log("Supressing form submit.!");
		submitEvent.preventDefault();
		submitEvent.stopPropagation();

		return false;
	},

	getInitialState: function() {
		return {
			activateForm: false
		};
	},

	handleClick: function(event) {
		this.setState({
			activateForm: !this.state.activateForm
		}, this.focusAfterClick);
	},

	focusAfterClick: function() {
		if (this.state.activateForm)
			this.refs.textField.getDOMNode().focus();
	},

	render: function () {
		var formGroupClasses = classNames({
			'Form-group': true,
			'u-flexGrow1': true,
			'u-paddingRD1': true,
			'is-active': this.state.activateForm
		});

		return (
			<form className="u-marginT3 u-flex" method="post" name="registration-form" onSubmit={this.registerDevice}>
				<div className={formGroupClasses} onClick={this.handleClick}>
					<label for="providerCode">Your service provider code</label>
					<input className="Form-control" refs="textField" type="text" name="providerCode" required></input>
				</div>
				<div className="Form-group u-flexExpandLeft">
					<input className="Button t-button t-button--md" type="submit" value="Register" name="submit" />
				</div>
			</form>
		);
	}
});

module.exports = RegistrationForm;
