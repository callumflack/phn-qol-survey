var React = require("react");
var classNames = require('classnames');
var RegistrationForm = require("./RegistrationForm.js");
var IcClose = require('../ui-Elements/Icons.js').IcClose;

// Close btn in same file to study flow of state/props
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
	closeRegClick: function() {
		this.props.registrationOpen = false;
		this.props.toggleRegistration(false);
	},
	render: function () {
		var modalClasses = classNames({
			'Modal': true,
			'is-active': this.props.registrationOpen
		});

		return (
			<div className={modalClasses} tabindex="-1" role="dialog" aria-labelledby="">
				<div className="Modal-dialog" role="document">
					<div className="Modal-content">

						<CloseButton modalCloseFunction={this.closeRegClick} />

						<main className="o-content u-mxs-marginT4" role="main" deviceRegistered={this.props.deviceRegistered}>
							<div className="o-container">

								<h1 className="c-delimit u-headline">
									<div className="c-delimit-rule"></div>
									<span className="c-delimit-block u-mxs-size11of12">Register as a PHN Service Provider</span>
								</h1>

								<div className="u-size9of12 Grid-cell--center">
									<RegistrationForm
										registrationOpen={this.props.registrationOpen}
										registerDevice={this.props.registerDevice}
									/>
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
