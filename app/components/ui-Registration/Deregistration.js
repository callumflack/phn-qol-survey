var React = require("react");
var classNames = require('classnames');
var IcClose = require('../ui-Icons/Icons.js').IcClose;

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

// Modal
var Deregistration = React.createClass({
	closeRegClick: function() {
		this.props.registrationOpen = false;
		this.props.toggleRegistration(false);
	},
	render: function () {
		var modalClasses = classNames({
			'Modal': true,
			'is-active': this.props.registrationOpen
			// 'is-active': true
		});

		return (
			<div className={modalClasses} tabindex="-1" role="dialog" aria-labelledby="">
				<div className="Modal-dialog" role="document">
					<div className="Modal-content">

						<CloseButton modalCloseFunction={this.closeRegClick} />

						<main className="o-content" role="main" deviceRegistered={this.props.deviceRegistered}>
							<div className="o-container">

								<h1 className="u-textMd u-textWtMd u-textCenter">
									You're registered as a Service Provider in {this.props.region}.<br />
								<span className="u-textWtLt">Are you sure you want to deregister?</span>
								</h1>

								<p className="u-textCenter u-marginT15">
									<button className="Button t-button--brand t-button--md u-marginR" onClick={this.closeRegClick} type="submit">No</button>
									<button className="Button t-button--rev t-button--md u-colorBrand" onClick={this.props.deregisterDevice} type="submit">Yes</button>
								</p>

							</div>
						</main>

					</div>
				</div>
			</div>
		);
	}
});

module.exports = Deregistration;
