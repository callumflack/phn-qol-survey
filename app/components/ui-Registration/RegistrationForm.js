var React = require("react");
var classNames = require('classnames');

var RegistrationForm = React.createClass({
	getInitialState: function() {
		return { liked: false };
	},

	handleClick: function(event) {
		this.setState({ liked: !this.state.liked });
	},

	render: function () {
		return (
			<form className="u-marginT3 u-flex" id="" action="" method="post" name="registration-form">
				<div className="Form-group u-flexGrow1 u-paddingRD1">
					<label for="code">Your service provider code</label>
					<input className="Form-control required" id="code" type="text" name="" placeholder="" required></input>
				</div>
				<div className="Form-group u-flexExpandLeft">
					<input className="Button t-button t-button--md" type="submit" value="Register" name="" />
				</div>
			</form>
		);
	}
});

module.exports = RegistrationForm;
