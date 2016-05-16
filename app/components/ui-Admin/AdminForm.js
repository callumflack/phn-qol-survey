var React = require("react");
var IcAvatar = require('../ui-Elements/Icons.js').IcAvatar;
var IcDownload = require('../ui-Elements/Icons.js').IcDownload;
var classNames = require('classnames');

var AdminForm = React.createClass({
	getInitialState: function() {
		return {
			usernameInputVisible: false,
			passwordInputVisible: false,
			loginPending: false,
			loginError: false
		};
	},
	inputHandleFocus: function(event) {
		var inputField = event.target,
			newState = {};

		newState[inputField.name + "InputVisible"] = true;
		this.setState(newState);
	},
	inputHandleBlur: function(event) {
		var inputField = event.target,
			newState = {};

		if (inputField.value === "") {
			newState[inputField.name + "InputVisible"] = false;
			this.setState(newState);
		}
	},
	submitLogin: function(submitEvent) {
		submitEvent.preventDefault();
		submitEvent.stopPropagation();

		var adminForm = this;

		this.setState({
			loginPending: true,
			loginError: false
		});

		this.props.sendLogin(
			this.usernameInput.value,
			this.passwordInput.value,
			loginResult
		);

		function loginResult(err, result) {
			if (err) {
				adminForm.setState({
					loginPending: false,
					loginError: true
				});
				return;
			}

			adminForm.setState({
				loginPending: false,
				loginError: false
			});
		}
	},
	render: function () {
		var formClasses = classNames({
				'Form': true,
				'has-error': this.state.loginError,
				'is-pending': this.state.loginPending
			}),
			formLoadingClasses = classNames({
				'Form-loadingWrapper': true,
				'is-active': this.state.loginPending,
				'u-colorWhite': this.state.loginPending
			});

		return (
			<form onSubmit={this.submitLogin} className={formClasses} action="" method="post" name="registration-form Admin-form">
				<div className={"Form-group" + (this.state.usernameInputVisible? ' is-active' : '')}>
					<label for="username">Username</label>
					<input
						className="Form-control"
						id="username"
						type="text"
						name="username"
						onFocus={this.inputHandleFocus}
						onBlur={this.inputHandleBlur}
						ref={(ref) => this.usernameInput = ref}
						required
					/>
				</div>
				<div className={"Form-group" + (this.state.passwordInputVisible? ' is-active' : '')}>
					<label for="password">Password</label>
					<input
						className="Form-control"
						id="password"
						type="password"
						name="password"
						onFocus={this.inputHandleFocus}
						onBlur={this.inputHandleBlur}
						ref={(ref) => this.passwordInput = ref}
						required
					/>
				</div>
				<div className="Form-group u-textCenter u-marginT15">
					<button className="Button t-button t-button--full" type="submit" value="" name="">
						<IcAvatar align="left" />Log in
					</button>
					<span className={formLoadingClasses}><div className="sk-spinner-pulse"></div></span>
				</div>
			</form>
		);
	}
});

module.exports = AdminForm;
