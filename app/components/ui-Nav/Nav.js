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
	updateSurveyProgress: function(questionsAnswered) {
		this.props.questionsAnswered = questionsAnswered;
		this.forceUpdate();
	},
	render: function() {
		var headerStyleClasses = classNames({
			'c-header': true,
			'is-registered': this.props.blocked
		});

		var settingsBtn;
		if (this.props.deviceRegistered) {
			settingsBtn = <a className="c-nav-status" onClick={this.regClick}><BtnLocation location={this.props.region} /></a>;
		} else if (this.props.loggedIn) {
			settingsBtn = <BtnLogout />;
		} else {
			settingsBtn = <a className="c-nav-status" onClick={this.regClick}><BtnRegister /></a>;
		}

		var surveyProgress = (this.props.surveyInProgress)?
			<SurveyProgress questionsAnswered={this.props.questionsAnswered} /> : "";

		return (
			<header className={headerStyleClasses} role="header">
				<nav className="c-nav">
					<NavLogo />
					{settingsBtn}
				</nav>

				{surveyProgress}

			</header>
		);
	}
});

module.exports = Nav;
