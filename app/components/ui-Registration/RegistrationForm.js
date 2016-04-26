var React = require("react");
var classNames = require('classnames');

var RegistrationForm = React.createClass({
	registerDevice: function(submitEvent) {
		console.log("Supressing form submit.!");
		submitEvent.preventDefault();
		submitEvent.stopPropagation();
		
		return false;
	},
	render: function () {
		return (
			<form className="u-marginT3 u-flex" method="post" name="registration-form" onSubmit={this.registerDevice}>
				<div className="Form-group u-flexGrow1 u-paddingRD1">
					<label for="code">Your service provider code</label>
					<input className="Form-control required" id="code" type="text" name="providerCode" placeholder="" required></input>
				</div>
				<div className="Form-group u-flexExpandLeft">
					<input className="Button t-button t-button--md" type="submit" value="Register" name="submit" />
				</div>
			</form>
		);
	}
});

module.exports = RegistrationForm;
