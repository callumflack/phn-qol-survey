var React = require('react');
var classNames = require('classnames');
var SurveyProgress = require('./SurveyProgress.js');
var BtnRegister = require('../ui-Buttons/NavButtons.js').BtnRegister;
var BtnLocation = require('../ui-Buttons/NavButtons.js').BtnLocation;
var BtnLogout = require('../ui-Buttons/NavButtons.js').BtnLogout;

var Nav = React.createClass({
	regClick: function() {
		this.props.toggleRegistration(true);
	},
	render: function() {
		var headerStyleClasses = classNames({
			'c-header': true,
			// The header has a background color if you're on the survey page.
			// The below is commented out until we can test device registration.
			'is-registered': this.props.deviceRegistered
			// 'is-registered': true
		});

		var settingsBtn = (this.props.deviceRegistered)?
							<BtnLocation location={this.props.region} />
							: <BtnRegister />,
			surveyProgress = (this.props.surveyInProgress)?
							<SurveyProgress questionsAnswered={this.props.questionsAnswered} />
							: "";

		return (
			<header className={headerStyleClasses} role="header">
				<nav className="c-nav">
					<a className="c-nav-home" href="#"><img src="images/NQPHN.png" alt="" /></a>
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
