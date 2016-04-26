var React = require("react");
var classNames = require('classnames');
var RegistrationForm = require("./RegistrationForm.js");
var IcClose = require('../ui-Icons/Icons.js').IcClose;

// Close btn in same file to study flow of state/props!
var CloseButton = React.createClass({
	close: function() {
		this.props.modalCloseFunction();
	},
	render: function () {
		return (
			<button className="t-buttonClose" onClick={this.close} aria-label="close">
				<IcClose size="super" />
			</button>
		);
	}
});

// Registration
var Registration = React.createClass({
	getInitialState: function() {
		return { open: false };
	},
	closeRegistratonModal: function() {
		this.setState({ open: false });
	},
	render: function () {
		var modalClasses = classNames({
			'Modal': true,
			/* @Kashi: based on state, add 'is-active', s'thing like this {open: this.state.open} ?? */
			/* For now, I'm toggling to style via this argument below */
			'is-active': this.state.open,
		});

		return (
			<div className={modalClasses} tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
				<div className="Modal-dialog" role="document">
					<div className="Modal-content">

						<CloseButton modalCloseFunction={this.closeRegistratonModal} />

						<main className="o-content" role="main" deviceRegistered={this.props.deviceRegistered}>
							<div className="o-container">

								<h1 className="c-delimit u-headline">
									<div className="c-delimit-rule"></div>
									<span className="c-delimit-block">Register</span>
								</h1>

								<div className="u-size9of12 Grid-cell--center">
									<RegistrationForm />
								</div>


							</div>
						</main>

					</div>
				</div>
			</div>
		);
	}
});

module.exports = Registration;
