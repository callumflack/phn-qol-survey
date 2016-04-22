var React = require("react");
var classNames = require('classnames');
var RegistrationForm = require("./RegistrationForm.js");
var IcClose = require('../ui-Icons/Icons.js').IcClose;

// Close btn in same file to study flow of state/props!
var CloseButton = React.createClass({
	getInitialState: function() {
		return { open: false };
	},

	handleClick: function(event) {
		/* set state to 'not open' */
		this.setState({ open: !this.state.open });
	},

	render: function () {
		return (
			/* bind this state to onClick w/ something like {this.click.bind(this)} ?? */
			<button className="t-buttonClose" onClick="" aria-label="close">
				<IcClose size="super" />
			</button>
		);
	}
});

// Registration
var Registration = React.createClass({
	render: function () {
		var modalClasses = classNames({
			'Modal': true,
			/* @Kashi: based on state, add 'is-active', s'thing like this {open: this.state.open} ?? */
			/* For now, I'm toggling to style via this argument below */
			'is-active': false,
		});

		return (
			<div className={modalClasses} tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
				<div className="Modal-dialog" role="document">
					<div className="Modal-content">

						<CloseButton />

						<main className="o-content" role="main" deviceRegistered={this.props.deviceRegistered}>
							<div className="o-container">

								<h1 className="c-delimit u-headline">
									<div className="c-delimit-rule"></div>
									<span className="c-delimit-block">Register</span>
								</h1>

								<RegistrationForm />

							</div>
						</main>

					</div>
				</div>
			</div>
		);
	}
});

module.exports = Registration;
