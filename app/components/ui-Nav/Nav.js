var React = require('react');
var classNames = require('classnames');
var SurveyProgress = require('./SurveyProgress.js');
var BtnRegister = require('../ui-Elements/NavButtons.js').BtnRegister;
var BtnLocation = require('../ui-Elements/NavButtons.js').BtnLocation;
var BtnLogout = require('../ui-Elements/NavButtons.js').BtnLogout;
var NavLogo = require('../ui-Elements/NavLogo.js');

var Nav = React.createClass({
	regClick: function() {
		this.props.toggleRegistration(true);
	},
	render: function() {
		var headerStyleClasses = classNames({
			'c-header': true,
			'is-registered': this.props.blocked
		});

		var settingsBtn;
		if (this.props.deviceRegistered) {
			settingsBtn = <BtnLocation location={this.props.region} />;
		} else if (location.hash === '#admin') {
			settingsBtn = "";
		} else {
			settingsBtn = <BtnRegister />;
		}

		var surveyProgress = (this.props.surveyInProgress)?
			<SurveyProgress questionsAnswered={this.props.questionsAnswered} /> : "";

		return (
			<header className={headerStyleClasses} role="header">
				<nav className="c-nav">
					<NavLogo />
					<a className="c-nav-status" onClick={this.regClick}>
						{settingsBtn}
					</a>
				</nav>

				{surveyProgress}

			</header>
		);
	}
});

module.exports = Nav;
