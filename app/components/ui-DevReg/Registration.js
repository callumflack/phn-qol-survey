var React = require("react");
var classNames = require('classnames');
var RegForm = require("./RegistrationForm.js");

var ToggleButton = React.createClass({
	getInitialState: function() {
		return { open: false };
	},

	handleClick: function(event) {
		this.setState({ open: !this.state.open });
	},

	render: function () {
		return (
			<button className="t-button--close" onClick={this.click.bind(this)} aria-label="close">
				<IcClose />
			</button>
		);
	}
});

var Registration = React.createClass({
	render: function () {
		var modalClasses = classNames({
			'Modal': true,
			'is-active': true,
			{open: this.state.open}
		});

		return (
			<div className={modalClasses} tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
				<div className="Modal-dialog" role="document">
					<div className="Modal-content">

						<ToggleButton />

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
