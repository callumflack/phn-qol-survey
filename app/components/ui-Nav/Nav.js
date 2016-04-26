var React = require('react');
var classNames = require('classnames');
var SurveyProgress = require('./SurveyProgress.js');
var BtnRegister = require('../ui-Buttons/NavButtons.js').BtnRegister;
var BtnLocation = require('../ui-Buttons/NavButtons.js').BtnLocation;
var BtnLogout = require('../ui-Buttons/NavButtons.js').BtnLogout;

var Nav = React.createClass({
	regClick: function() {
		if ( ! this.props.deviceRegistered)
			this.props.toggleRegistration();
	},
	render: function() {
		var headerStyleClasses = classNames({
			'c-header': true,
			// The header has a background color if you're on the survey page.
			// The below is commented out until we can test device registration.
			// 'is-registered': this.props.deviceRegistered
			'is-registered': true
		});

		var buttonToShow = undefined;
		var surveyShowsProgress = undefined;

		if ( ! this.props.deviceRegistered) {
			buttonToShow = (<BtnRegister />);
			surveyShowsProgress = " ";
		} else {
			buttonToShow = (<BtnLocation location={this.props.region} />);
			surveyShowsProgress = (<SurveyProgress />);
		}

		return (
			<header className={headerStyleClasses} role="header">
				<nav className="c-nav">
					<a className="c-nav-home" href="#"><img src="images/NQPHN.png" alt="" /></a>
					<a className="c-nav-status" onClick={this.regClick}>
						{buttonToShow}
					</a>
				</nav>

				{surveyShowsProgress}

			</header>
		);
	}
});

module.exports = Nav;
